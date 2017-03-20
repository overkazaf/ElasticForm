const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const LRUCache = require('lru-cache')
const logger = require('koa-logger')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const mongoose = require('mongoose');

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

app.prepare()
.then(() => {
  const server = new Koa()
  const router = new Router()
  
  mongoose.connect('mongodb://localhost/test');
  const db = mongoose.connection;


  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
    // yay!
    console.log('yay');
  });

  // page routers
  router.get('/index', function *() {
    let { req, res, query } = this;
    let path = '/index'
    renderAndCache(req, res, path, query)
    this.respond = false
  })

  router.get('/other', function *() {
    let { req, res, query } = this;
    let path = '/other'
    renderAndCache(req, res, path, query)
    this.respond = false
  })

  // interface routers
  router.get('/user/:id', function *(id) {
    let { req, res, params} = this;

    res.send(500, {'error': 'holy shit'});

    res.end(JSON.stringify({
      username: 'John Doe ' + ~~(100 * Math.random()),
      age: 45,
    }))
  })

  router.get('*', function *() {
    handle(this.req, this.res)
    this.respond = false
  })

  server.use(logger())
  server.use(function *(next) {
    // Koa doesn't seems to set the default statusCode.
    // So, this middleware does that
    this.res.statusCode = 200
    yield next
  })

  server.use(router.routes())
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

function renderAndCache (req, res, path, query) {
  let html
  let cacheKey = getCacheKey(req)

  if (html = ssrCache.get(cacheKey)) {
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Content-Length', Buffer.byteLength(html))
    console.log(`Hit cache key ${cacheKey}`)
    res.end(html)
    return
  }

  app.renderToHTML(req, res, path, query)
  .then((html) => {
    console.log(`Miss cache ${path}`);
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Content-Length', Buffer.byteLength(html))
    ssrCache.set(path, html)
    res.end(html)
  }).catch((e) => {
    console.error(e)
  })
}

function getCacheKey (req) {
  return `${req.url}`
}

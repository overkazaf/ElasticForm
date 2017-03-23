const _ = require('lodash');
const OSS = require('ali-oss').Wrapper;

const client = new OSS({
  region: 'oss-cn-shanghai',
  
  bucket: 'jonong-test'
});

client.list().then(function (result) {
  console.log(result.objects);
}).catch(function (err) {
  console.error(err);
});

// client.listBuckets({
// 	"max-keys": 10
// }).then(function (res) {
// 	return res;
// }).then(function (data) {
// 	console.log('data', data.buckets);
// }).catch(function (err) {
// 	console.log('error', err);
// });


// const objId = _.uniqueId();
// client.put(objId, 'testing.txt')
// .then(function(val) {
// 	console.log(val.res);
// 	return client.get(objId);
// }).then(function(val) {
// 	console.log(val.res);
//   	console.log(val.content.toString());
// });
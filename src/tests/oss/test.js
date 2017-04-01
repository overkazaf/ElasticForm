const _ = require('lodash');
const OSS = require('ali-oss').Wrapper;
const co = require('co');
const fetch = require('isomorphic-fetch');

const client = new OSS({
  region: 'oss-cn-shanghai',
  accessKeyId: 'LTAIKa03DGXRmaE9',
  accessKeySecret: '3eZyktuoZukv0mO2lGYFUiGKHfOWiI',
  bucket: 'jonong-test'
});


co(function* () {
	const res = yield client.list();

	console.log(res);
	return res.objects;
}).then(function(objects) {
	console.log('Objects', objects);
});


// const objId = 1;
// client.put(objId, 'test.js')
// .then(function(val) {
// 	console.log(val.res);
// 	return client.get(objId);
// }, function (err) {
// 	throw err;
// }).then(function(val) {
// 	console.log(val.res);
//   	console.log(val.content.toString());
// }, function (err) {
// 	throw err;
// });
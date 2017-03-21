/**
 * [UserService]
 */
const mongoose = require('mongoose');
const modelName = mongoose.model('User');

module.exports.find = function(option, callback) {
	modelName.findOne(option, function(err, data) {
		if (err) throw err;
		console.log('data in UserService', data);
		callback && callback(data);
	});
};
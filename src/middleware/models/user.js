const mongoose = require('mongoose');
const User = mongoose.model('User');

var userSchema = new mongoose.Schema({
	_id: ObjectID,
	name: String,
	nickName: String,
	password: String,
	salt: String,
	email: String,
	creater: ObjectID,
	createTs: Timestamp
});


mongoose.model('User', userSchema);
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
	_id: ObjectId,
	name: String,
	nickName: String,
	password: String,
	salt: String,
	email: String,
	creater: ObjectId,
	createTs: Date
});

mongoose.model('User', userSchema);

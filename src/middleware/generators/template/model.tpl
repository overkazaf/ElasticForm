const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const {{model}}Schema = new mongoose.Schema({{schemaDef}});

mongoose.model({{Model}}, {{model}}Schema);

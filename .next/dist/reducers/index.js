'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxImmutable = require('redux-immutable');

var _counterReducer = require('./counterReducer');

var _starReducer = require('./starReducer');

var rootReducer = (0, _reduxImmutable.combineReducers)({
	counterReducer: _counterReducer.counterReducer,
	starReducer: _starReducer.starReducer
});

exports.default = rootReducer;
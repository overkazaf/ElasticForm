'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextConnect = exports.initStore = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _nextConnectRedux = require('next-connect-redux');

var _nextConnectRedux2 = _interopRequireDefault(_nextConnectRedux);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initStore = exports.initStore = function initStore(initialState) {
  return (0, _redux.createStore)(_reducers2.default, _immutable2.default.fromJS(initialState), (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

var nextConnect = exports.nextConnect = (0, _nextConnectRedux2.default)(initStore);
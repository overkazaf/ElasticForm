'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextConnect = exports.initStore = exports.hideAction = exports.showAction = exports.reducer = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _nextConnectRedux = require('next-connect-redux');

var _nextConnectRedux2 = _interopRequireDefault(_nextConnectRedux);

var _ActionTypes = require('../constants/ActionTypes.js');

var ActionTypes = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { shown: false };
  var action = arguments[1];

  switch (action.type) {
    case ActionTypes.SHOW:
      return { shown: true };
    case ActionTypes.HIDE:
      return { shown: false };
    default:
      return state;
  }
};

var showAction = exports.showAction = function showAction() {
  return function (dispatch) {
    return function () {
      return dispatch({ type: ActionTypes.SHOW });
    };
  };
};

var hideAction = exports.hideAction = function hideAction() {
  return function (dispatch) {
    return function () {
      return dispatch({ type: ActionTypes.HIDE });
    };
  };
};

var initStore = exports.initStore = function initStore(initialState) {
  return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

var nextConnect = exports.nextConnect = (0, _nextConnectRedux2.default)(initStore);
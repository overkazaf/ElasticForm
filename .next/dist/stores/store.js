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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJBY3Rpb25UeXBlcyIsInJlZHVjZXIiLCJzdGF0ZSIsInNob3duIiwiYWN0aW9uIiwidHlwZSIsIlNIT1ciLCJISURFIiwic2hvd0FjdGlvbiIsImRpc3BhdGNoIiwiaGlkZUFjdGlvbiIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSIsIm5leHRDb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxXOzs7Ozs7QUFFTCxJQUFNQyw0QkFBVSxTQUFWQSxPQUFVLEdBQXNDO0FBQUEsTUFBckNDLEtBQXFDLHVFQUE3QixFQUFFQyxPQUFPLEtBQVQsRUFBNkI7QUFBQSxNQUFYQyxNQUFXOztBQUMzRCxVQUFRQSxPQUFPQyxJQUFmO0FBQ0UsU0FBS0wsWUFBWU0sSUFBakI7QUFBdUIsYUFBTyxFQUFFSCxPQUFPLElBQVQsRUFBUDtBQUN2QixTQUFLSCxZQUFZTyxJQUFqQjtBQUF1QixhQUFPLEVBQUVKLE9BQU8sS0FBVCxFQUFQO0FBQ3ZCO0FBQVMsYUFBT0QsS0FBUDtBQUhYO0FBS0QsQ0FOTTs7QUFRQSxJQUFNTSxrQ0FBYSxTQUFiQSxVQUFhO0FBQUEsU0FBTSxvQkFBWTtBQUMxQyxXQUFPO0FBQUEsYUFBTUMsU0FBUyxFQUFFSixNQUFNTCxZQUFZTSxJQUFwQixFQUFULENBQU47QUFBQSxLQUFQO0FBQ0QsR0FGeUI7QUFBQSxDQUFuQjs7QUFJQSxJQUFNSSxrQ0FBYSxTQUFiQSxVQUFhO0FBQUEsU0FBTSxvQkFBWTtBQUMxQyxXQUFPO0FBQUEsYUFBTUQsU0FBUyxFQUFFSixNQUFNTCxZQUFZTyxJQUFwQixFQUFULENBQU47QUFBQSxLQUFQO0FBQ0QsR0FGeUI7QUFBQSxDQUFuQjs7QUFJQSxJQUFNSSxnQ0FBWSxTQUFaQSxTQUFZLENBQVVDLFlBQVYsRUFBd0I7QUFDL0MsU0FBTyx3QkFBWVgsT0FBWixFQUFxQlcsWUFBckIsRUFBbUMsaURBQW5DLENBQVA7QUFDRCxDQUZNOztBQUlBLElBQU1DLG9DQUFjLGdDQUFpQkYsU0FBakIsQ0FBcEIiLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL292ZXJrYXphZi9EZXNrdG9wL2NvZGVzL2dpdC9wbGF5R3JvdW5kL0ludGVsbGlGb3JtIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IG5leHRDb25uZWN0UmVkdXggZnJvbSAnbmV4dC1jb25uZWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcy5qcyc7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0geyBzaG93bjogZmFsc2UgfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFjdGlvblR5cGVzLlNIT1c6IHJldHVybiB7IHNob3duOiB0cnVlIH07XG4gICAgY2FzZSBBY3Rpb25UeXBlcy5ISURFOiByZXR1cm4geyBzaG93bjogZmFsc2UgfTtcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzaG93QWN0aW9uID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5TSE9XfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGlkZUFjdGlvbiA9ICgpID0+IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuICgpID0+IGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSElERX0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IGZ1bmN0aW9uIChpbml0aWFsU3RhdGUpIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IG5leHRDb25uZWN0ID0gbmV4dENvbm5lY3RSZWR1eChpbml0U3RvcmUpOyJdfQ==
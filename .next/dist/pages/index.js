'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../stores/store.js');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _ActionTypes = require('../constants/ActionTypes');

var ActionTypes = _interopRequireWildcard(_ActionTypes);

var _index = require('../scss/index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliForm/pages/index.js?entry';


var Comp = function (_Component) {
  (0, _inherits3.default)(Comp, _Component);

  function Comp() {
    (0, _classCallCheck3.default)(this, Comp);

    return (0, _possibleConstructorReturn3.default)(this, (Comp.__proto__ || (0, _getPrototypeOf2.default)(Comp)).apply(this, arguments));
  }

  (0, _createClass3.default)(Comp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          dispatch = _props.dispatch,
          shown = _props.shown;

      var startClock = function startClock() {
        return function (dispatch) {
          dispatch({ type: ActionTypes.SHOW });
        };
      };

      dispatch(startClock());
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      var _props2 = this.props,
          shown = _props2.shown,
          dispatch = _props2.dispatch;

      var type = shown ? ActionTypes.HIDE : ActionTypes.SHOW;

      dispatch(function () {
        return function () {
          dispatch({ type: type });
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          isServer = _props3.isServer,
          dispatch = _props3.dispatch,
          shown = _props3.shown;

      var that = this;

      return _react2.default.createElement('div', { className: isServer, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement('button', { onClick: that.toggle.bind(that), __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'SHOW'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Hello guy!', _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'It\'s a span for testing')), _react2.default.createElement('button', { onClick: null, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'HIDE'));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.subscribe(function () {
        console.log(store.getState());
      });
      return { isServer: isServer, shown: true };
    }
  }]);

  return Comp;
}(_react.Component);

exports.default = (0, _store.nextConnect)(function (state) {
  return state;
})(Comp);
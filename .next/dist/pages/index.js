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

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _Counter = require('../components/Counter');

var _Counter2 = _interopRequireDefault(_Counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliForm/pages/index.js?entry';


var MainPage = function (_Component) {
  (0, _inherits3.default)(MainPage, _Component);

  function MainPage() {
    (0, _classCallCheck3.default)(this, MainPage);

    return (0, _possibleConstructorReturn3.default)(this, (MainPage.__proto__ || (0, _getPrototypeOf2.default)(MainPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(MainPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;

      setTimeout(function () {
        dispatch({
          type: 'INC',
          payload: 10
        });
        console.log('dispatched');
      }, 2000);
    }
  }, {
    key: 'increase',
    value: function increase() {
      this.props.dispatch({
        type: 'INC',
        payload: 1
      });
    }
  }, {
    key: 'decrease',
    value: function decrease() {
      this.props.dispatch({
        type: 'INC',
        payload: -1
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      console.log('handle');
      this.props.dispatch({
        type: 'INC',
        payload: 3
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          counter = _props.counter,
          isServer = _props.isServer;

      return _react2.default.createElement('div', { className: isServer, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('div', { onClick: this.handleClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'aaaaa'), _react2.default.createElement(_reactNoSsr2.default, { onSSR: null, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_Counter2.default, {
        increase: this.increase.bind(this),
        decrease: this.decrease.bind(this),
        counter: counter, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.subscribe(function () {
        console.log(store.getState());
      });

      return {
        isServer: isServer,
        counter: 0
      };
    }
  }]);

  return MainPage;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(MainPage);
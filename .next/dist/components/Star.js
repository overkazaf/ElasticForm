'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactRedux = require('react-redux');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliForm/components/Star.js';


var Star = function (_Component) {
  (0, _inherits3.default)(Star, _Component);

  function Star() {
    (0, _classCallCheck3.default)(this, Star);

    return (0, _possibleConstructorReturn3.default)(this, (Star.__proto__ || (0, _getPrototypeOf2.default)(Star)).apply(this, arguments));
  }

  (0, _createClass3.default)(Star, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log('nextProps', nextProps);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(type) {
      this.props.dispatch({
        type: 'UPDATE',
        data: {
          stars: 3
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', { className: 'aaa', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('div', { onClick: this.handleClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, '\u70B9\u6211'), _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, 'Next.js has ', this.props.stars, ' \u2B50\uFE0F'));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      return { stars: 0 };
    }
  }]);

  return Star;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return (0, _extends3.default)({}, state);
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Star);
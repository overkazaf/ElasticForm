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

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactRedux = require('react-redux');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Star = function (_Component) {
  (0, _inherits3.default)(Star, _Component);

  function Star() {
    (0, _classCallCheck3.default)(this, Star);

    return (0, _possibleConstructorReturn3.default)(this, (Star.__proto__ || (0, _getPrototypeOf2.default)(Star)).apply(this, arguments));
  }

  (0, _createClass3.default)(Star, [{
    key: 'handleClick',
    value: function handleClick(type) {
      this.props.dispatch({
        type: 'UPDATE',
        payload: 3
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'm-star' }, _react2.default.createElement('div', { onClick: this.handleClick.bind(this) }, '\u70B9\u6211'), _react2.default.createElement('span', null, 'Next.js has ', this.props.stars, ' \u2B50\uFE0F'));
    }
  }]);

  return Star;
}(_react.Component);

var mapStateToProps = function mapStateToProps($$state) {
  return $$state.get('starReducer').toJS();
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Star);
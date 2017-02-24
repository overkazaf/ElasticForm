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

var _reactRedux = require('react-redux');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Counter = function (_Component) {
  (0, _inherits3.default)(Counter, _Component);

  function Counter() {
    (0, _classCallCheck3.default)(this, Counter);

    return (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Counter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          increase = _props.increase,
          decrease = _props.decrease,
          counter = _props.counter;

      return _react2.default.createElement('div', { className: 'm-counter' }, _react2.default.createElement('span', { onClick: increase, className: 'btn' }, ' + '), _react2.default.createElement('span', null, ' ', counter, ' '), _react2.default.createElement('span', { onClick: decrease, className: 'btn' }, ' - '));
    }
  }]);

  return Counter;
}(_react.Component);

var mapStateToProps = function mapStateToProps($$state, ownProps) {
  return $$state.get('counterReducer').toJS();
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Counter);
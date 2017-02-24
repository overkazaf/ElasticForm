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

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliForm/components/Counter.js';


var Counter = function (_Component) {
  (0, _inherits3.default)(Counter, _Component);

  function Counter() {
    (0, _classCallCheck3.default)(this, Counter);

    return (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          dispatch = _props.dispatch,
          increase = _props.increase;

      setTimeout(function () {
        dispatch({
          type: 'TEST',
          data: {
            counter: 90
          }
        });
      }, 3000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          increase = _props2.increase,
          decrease = _props2.decrease,
          counter = _props2.counter;

      return _react2.default.createElement('div', { className: 'm-counter', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('span', { onClick: increase, className: 'btn', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, ' + '), _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, ' ', counter, ' '), _react2.default.createElement('span', { onClick: decrease, className: 'btn', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, ' - '));
    }
  }]);

  return Counter;
}(_react.Component);

var mapStateToProps = function mapStateToProps($$state, ownProps) {
  return $$state;
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Counter);
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

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comp = function (_Component) {
  (0, _inherits3.default)(Comp, _Component);

  function Comp() {
    (0, _classCallCheck3.default)(this, Comp);

    return (0, _possibleConstructorReturn3.default)(this, (Comp.__proto__ || (0, _getPrototypeOf2.default)(Comp)).apply(this, arguments));
  }

  (0, _createClass3.default)(Comp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'handleClick',
    value: function handleClick(type) {
      this.props.dispatch({
        type: type
      });
    }
  }, {
    key: 'onPageClick',
    value: function onPageClick() {
      console.log('pageClick');
    }
  }, {
    key: 'render',
    value: function render() {
      var shown = this.props.shown;

      return _react2.default.createElement('div', null, _react2.default.createElement(_Page2.default, { title: 'SSR Page', pageOnClick: this.onPageClick.bind(this), linkTo: '/index' }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() });

      store.subscribe(function () {
        console.log(store.getState());
      });
      return { isServer: isServer, shown: true };
    }
  }]);

  return Comp;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(Comp);
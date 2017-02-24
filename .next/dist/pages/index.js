'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _Star = require('../components/Star');

var _Star2 = _interopRequireDefault(_Star);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      return _react2.default.createElement('div', { className: isServer }, _react2.default.createElement('div', { onClick: this.handleClick.bind(this) }, 'aaaaa'), _react2.default.createElement(_reactNoSsr2.default, { onSSR: null }, _react2.default.createElement(_Counter2.default, {
        increase: this.increase.bind(this),
        decrease: this.decrease.bind(this),
        counter: counter })), _react2.default.createElement(_Star2.default, null));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var store = _ref2.store,
            isServer = _ref2.isServer;
        var res, json;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _isomorphicFetch2.default)('https://api.github.com/repos/developit/preact');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;

                store.subscribe(function () {
                  console.log(store.getState());
                });

                return _context.abrupt('return', Immutable.fromJS({
                  isServer: isServer,
                  counter: 0,
                  stars: json.stargazers_count || 12
                }));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MainPage;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(MainPage);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _Star = require('../components/Star');

var _Star2 = _interopRequireDefault(_Star);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comp = function (_Component) {
  (0, _inherits3.default)(Comp, _Component);

  function Comp() {
    (0, _classCallCheck3.default)(this, Comp);

    return (0, _possibleConstructorReturn3.default)(this, (Comp.__proto__ || (0, _getPrototypeOf2.default)(Comp)).apply(this, arguments));
  }

  (0, _createClass3.default)(Comp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var props = this.props;

      var dispatch = props.dispatch,
          isServer = props.isServer,
          state = (0, _objectWithoutProperties3.default)(props, ['dispatch', 'isServer']);

      setTimeout(function () {
        dispatch({
          type: 'UPDATE',
          data: {
            stars: 1
          }
        });
      }, 5000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isServer = _props.isServer,
          stars = _props.stars;

      console.log('reRender', stars);
      return _react2.default.createElement('div', null, _react2.default.createElement(_Star2.default, null));
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
                return fetch('https://api.github.com/repos/zeit/next.js');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;

                store.subscribe(function () {
                  console.log(store.getState());
                });

                store.dispatch({
                  type: 'UPDATE',
                  data: {
                    isServer: isServer,
                    stars: json.stargazers_count,
                    roles: []
                  }
                });

                return _context.abrupt('return', { isServer: isServer });

              case 9:
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

  return Comp;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(Comp);
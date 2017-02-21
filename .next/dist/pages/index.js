'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/overkazaf/Desktop/codes/git/playGround/IntelliForm/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/overkazaf/Desktop/codes/git/playGround/IntelliForm/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/overkazaf/Desktop/codes/git/playGround/IntelliForm/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/overkazaf/Desktop/codes/git/playGround/IntelliForm/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/overkazaf/Desktop/codes/git/playGround/IntelliForm/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/overkazaf/Desktop/codes/git/playGround/IntelliForm/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _store = require('../stores/store.js');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _ActionTypes = require('../constants/ActionTypes');

var Types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
      var _props = this.props,
          dispatch = _props.dispatch,
          shown = _props.shown;


      var startClock = function startClock() {
        return dispatch(startClock());
      };
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      var _props2 = this.props,
          shown = _props2.shown,
          dispatch = _props2.dispatch;

      var type = shown ? Types.HIDE : Types.SHOW;

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

      return _react2.default.createElement(
        'div',
        { className: isServer },
        _react2.default.createElement(
          'button',
          { onClick: that.toggle.bind(that) },
          'SHOW'
        ),
        _react2.default.createElement(
          'button',
          { onClick: null },
          'HIDE'
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      return { isServer: isServer, shown: true };
    }
  }]);
  return Comp;
}(_react.Component);

exports.default = (0, _store.nextConnect)(function (state) {
  return state;
})(Comp);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlR5cGVzIiwiQ29tcCIsInByb3BzIiwiZGlzcGF0Y2giLCJzaG93biIsInN0YXJ0Q2xvY2siLCJ0eXBlIiwiSElERSIsIlNIT1ciLCJpc1NlcnZlciIsInRoYXQiLCJ0b2dnbGUiLCJiaW5kIiwic3RvcmUiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0lBQVlBLEs7Ozs7OztJQUVOQyxJOzs7Ozs7Ozs7O3dDQUtpQjtBQUFBLG1CQUlmLEtBQUtDLEtBSlU7QUFBQSxVQUVqQkMsUUFGaUIsVUFFakJBLFFBRmlCO0FBQUEsVUFHakJDLEtBSGlCLFVBR2pCQSxLQUhpQjs7O0FBTW5CLFVBQUlDLGFBQWEsU0FBYkEsVUFBYTtBQUFBLGVBRWpCRixTQUFTRSxZQUFULENBRmlCO0FBQUEsT0FBakI7QUFHRDs7OzZCQUVRO0FBQUEsb0JBQ21CLEtBQUtILEtBRHhCO0FBQUEsVUFDREUsS0FEQyxXQUNEQSxLQURDO0FBQUEsVUFDTUQsUUFETixXQUNNQSxRQUROOztBQUVQLFVBQUlHLE9BQU9GLFFBQVFKLE1BQU1PLElBQWQsR0FBcUJQLE1BQU1RLElBQXRDOztBQUVBTCxlQUFTLFlBQU07QUFDYixlQUFPLFlBQU07QUFDWEEsbUJBQVMsRUFBRUcsVUFBRixFQUFUO0FBQ0QsU0FGRDtBQUdELE9BSkQ7QUFLRDs7OzZCQUVTO0FBQUEsb0JBS0osS0FBS0osS0FMRDtBQUFBLFVBRU5PLFFBRk0sV0FFTkEsUUFGTTtBQUFBLFVBR05OLFFBSE0sV0FHTkEsUUFITTtBQUFBLFVBSU5DLEtBSk0sV0FJTkEsS0FKTTs7O0FBT1IsVUFBSU0sT0FBTyxJQUFYOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0QsUUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBUSxTQUFTQyxLQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUJGLElBQWpCLENBQWpCO0FBQUE7QUFBQSxTQURGO0FBS0U7QUFBQTtBQUFBLFlBQVEsU0FBUyxJQUFqQjtBQUFBO0FBQUE7QUFMRixPQURGO0FBV0Q7OzswQ0E5QzRDO0FBQUEsVUFBbkJHLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLFVBQVpKLFFBQVksUUFBWkEsUUFBWTs7QUFDM0MsYUFBTyxFQUFFQSxrQkFBRixFQUFZTCxPQUFPLElBQW5CLEVBQVA7QUFDRDs7Ozs7a0JBK0NZLHdCQUFZLFVBQUNVLEtBQUQ7QUFBQSxTQUFXQSxLQUFYO0FBQUEsQ0FBWixFQUE4QmIsSUFBOUIsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb3ZlcmthemFmL0Rlc2t0b3AvY29kZXMvZ2l0L3BsYXlHcm91bmQvSW50ZWxsaUZvcm0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNob3dBY3Rpb24sIGhpZGVBY3Rpb24sIG5leHRDb25uZWN0fSBmcm9tICcuLi9zdG9yZXMvc3RvcmUuanMnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0ICogYXMgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJztcblxuY2xhc3MgQ29tcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgc3RvcmUsIGlzU2VydmVyIH0pIHtcbiAgICByZXR1cm4geyBpc1NlcnZlciwgc2hvd246IHRydWUgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBsZXQge1xuICAgICAgZGlzcGF0Y2gsXG4gICAgICBzaG93bixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBzdGFydENsb2NrID0gKCkgPT4gXG5cbiAgICBkaXNwYXRjaChzdGFydENsb2NrKCkpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGxldCB7IHNob3duLCBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgdHlwZSA9IHNob3duID8gVHlwZXMuSElERSA6IFR5cGVzLlNIT1c7XG4gICAgXG4gICAgZGlzcGF0Y2goKCkgPT4ge1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBsZXQge1xuICAgICAgaXNTZXJ2ZXIsXG4gICAgICBkaXNwYXRjaCxcbiAgICAgIHNob3duLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc1NlcnZlcn0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhhdC50b2dnbGUuYmluZCh0aGF0KX0+XG4gICAgICAgICAgU0hPV1xuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e251bGx9PlxuICAgICAgICAgIEhJREVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV4dENvbm5lY3QoKHN0YXRlKSA9PiBzdGF0ZSkoQ29tcCk7XG4iXX0=
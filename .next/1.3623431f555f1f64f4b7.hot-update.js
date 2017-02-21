webpackHotUpdate(1,{

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(16);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(17);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(18);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(20);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(19);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(138);
	
	var _nextReduxWrapper = __webpack_require__(137);
	
	var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);
	
	var _ActionTypes = __webpack_require__(75);
	
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
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9mN2VlIl0sIm5hbWVzIjpbIlR5cGVzIiwiQ29tcCIsInByb3BzIiwiZGlzcGF0Y2giLCJzaG93biIsInN0YXJ0Q2xvY2siLCJ0eXBlIiwiSElERSIsIlNIT1ciLCJpc1NlcnZlciIsInRoYXQiLCJ0b2dnbGUiLCJiaW5kIiwic3RvcmUiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7S0FBWUEsSzs7Ozs7O0tBRU5DLEk7Ozs7Ozs7Ozs7eUNBS2lCO0FBQUEsb0JBSWYsS0FBS0MsS0FKVTtBQUFBLFdBRWpCQyxRQUZpQixVQUVqQkEsUUFGaUI7QUFBQSxXQUdqQkMsS0FIaUIsVUFHakJBLEtBSGlCOzs7QUFNbkIsV0FBSUMsYUFBYSxTQUFiQSxVQUFhO0FBQUEsZ0JBRWpCRixTQUFTRSxZQUFULENBRmlCO0FBQUEsUUFBakI7QUFHRDs7OzhCQUVRO0FBQUEscUJBQ21CLEtBQUtILEtBRHhCO0FBQUEsV0FDREUsS0FEQyxXQUNEQSxLQURDO0FBQUEsV0FDTUQsUUFETixXQUNNQSxRQUROOztBQUVQLFdBQUlHLE9BQU9GLFFBQVFKLE1BQU1PLElBQWQsR0FBcUJQLE1BQU1RLElBQXRDOztBQUVBTCxnQkFBUyxZQUFNO0FBQ2IsZ0JBQU8sWUFBTTtBQUNYQSxvQkFBUyxFQUFFRyxVQUFGLEVBQVQ7QUFDRCxVQUZEO0FBR0QsUUFKRDtBQUtEOzs7OEJBRVM7QUFBQSxxQkFLSixLQUFLSixLQUxEO0FBQUEsV0FFTk8sUUFGTSxXQUVOQSxRQUZNO0FBQUEsV0FHTk4sUUFITSxXQUdOQSxRQUhNO0FBQUEsV0FJTkMsS0FKTSxXQUlOQSxLQUpNOzs7QUFPUixXQUFJTSxPQUFPLElBQVg7O0FBRUEsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFXRCxRQUFoQjtBQUNFO0FBQUE7QUFBQSxhQUFRLFNBQVNDLEtBQUtDLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkYsSUFBakIsQ0FBakI7QUFBQTtBQUFBLFVBREY7QUFLRTtBQUFBO0FBQUEsYUFBUSxTQUFTLElBQWpCO0FBQUE7QUFBQTtBQUxGLFFBREY7QUFXRDs7OzJDQTlDNEM7QUFBQSxXQUFuQkcsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsV0FBWkosUUFBWSxRQUFaQSxRQUFZOztBQUMzQyxjQUFPLEVBQUVBLGtCQUFGLEVBQVlMLE9BQU8sSUFBbkIsRUFBUDtBQUNEOzs7OzttQkErQ1ksd0JBQVksVUFBQ1UsS0FBRDtBQUFBLFVBQVdBLEtBQVg7QUFBQSxFQUFaLEVBQThCYixJQUE5QixDIiwiZmlsZSI6IjEuMzYyMzQzMWY1NTVmMWY2NGY0YjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2hvd0FjdGlvbiwgaGlkZUFjdGlvbiwgbmV4dENvbm5lY3R9IGZyb20gJy4uL3N0b3Jlcy9zdG9yZS5qcyc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgKiBhcyBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xuXG5jbGFzcyBDb21wIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyBzdG9yZSwgaXNTZXJ2ZXIgfSkge1xuICAgIHJldHVybiB7IGlzU2VydmVyLCBzaG93bjogdHJ1ZSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGxldCB7XG4gICAgICBkaXNwYXRjaCxcbiAgICAgIHNob3duLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHN0YXJ0Q2xvY2sgPSAoKSA9PiBcblxuICAgIGRpc3BhdGNoKHN0YXJ0Q2xvY2soKSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgbGV0IHsgc2hvd24sIGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB0eXBlID0gc2hvd24gPyBUeXBlcy5ISURFIDogVHlwZXMuU0hPVztcbiAgICBcbiAgICBkaXNwYXRjaCgoKSA9PiB7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGUgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGxldCB7XG4gICAgICBpc1NlcnZlcixcbiAgICAgIGRpc3BhdGNoLFxuICAgICAgc2hvd24sXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lzU2VydmVyfT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGF0LnRvZ2dsZS5iaW5kKHRoYXQpfT5cbiAgICAgICAgICBTSE9XXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bnVsbH0+XG4gICAgICAgICAgSElERVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXh0Q29ubmVjdCgoc3RhdGUpID0+IHN0YXRlKShDb21wKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
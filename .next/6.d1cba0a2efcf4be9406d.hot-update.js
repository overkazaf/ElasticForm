webpackHotUpdate(6,{

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = undefined;

var _immutable = __webpack_require__(89);

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = {
  counter: 1
};

var $$map = _immutable2.default.fromJS({ 'a': 1 });
var $$map2 = _immutable2.default.fromJS($$map);
console.log('Immutable.is($$map, $$map2)', _immutable2.default.is($$map, $$map2));
console.log('Immutable.is($$map, $$map2)', $$map === $$map2);

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _immutable2.default.fromJS(initState);
  var action = arguments[1];

  switch (action.type) {
    case 'INC':
      {
        var $$state = _immutable2.default.fromJS(state);
        var $$newState = $$state.set('counter', $$state.get('counter') + action.payload);
        return $$newState.toObject();
      }
    case 'TEST':
      {
        console.log('state in TEST', state);
        return action.data;
      }
    default:
      return _immutable2.default.fromJS(state);
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/overkazaf/Desktop/codes/git/playGround/IntelliForm/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/overkazaf/Desktop/codes/git/playGround/IntelliForm/reducers/index.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz80MGEwYjZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7Ozs7OztBQUV6QixJQUFNO1dBQ0k7QUFBVDs7QUFJRCxJQUFJLFFBQVEsb0JBQVUsT0FBTyxFQUFDLEtBQUs7QUFDbkMsSUFBSSxTQUFTLG9CQUFVLE9BQU87QUFDOUIsUUFBUSxJQUFJLCtCQUErQixvQkFBVSxHQUFHLE9BQU87QUFDL0QsUUFBUSxJQUFJLCtCQUErQixVQUUzQzs7QUFBTyxJQUFNLDRCQUFVLG1CQUFpRDtNQUFBLDRFQUF4QyxvQkFBVSxPQUE4QjtNQUFBLG1CQUN0RTs7VUFBUSxPQUNOO1NBQVk7QUFDWDtZQUFJLFVBQVUsb0JBQVUsT0FDeEI7WUFBSSxhQUFhLFFBQVEsSUFBSSxXQUFXLFFBQVEsSUFBSSxhQUFhLE9BQ2pFO2VBQU8sV0FDUDtBQUNEO1NBQWE7QUFDWjtnQkFBUSxJQUFJLGlCQUNaO2VBQU8sT0FDUDtBQUNEO0FBQVM7YUFBTyxvQkFBVSxPQUU3Qjs7QUFiTSxFIiwiZmlsZSI6IjYuZDFjYmEwYTJlZmNmNGJlOTQwNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbW11dGFibGUsIHsgTWFwLCBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHRjb3VudGVyOiAxLFxufTtcblxuXG5sZXQgJCRtYXAgPSBJbW11dGFibGUuZnJvbUpTKHsnYSc6IDF9KTtcbmxldCAkJG1hcDIgPSBJbW11dGFibGUuZnJvbUpTKCQkbWFwKTtcbmNvbnNvbGUubG9nKCdJbW11dGFibGUuaXMoJCRtYXAsICQkbWFwMiknLCBJbW11dGFibGUuaXMoJCRtYXAsICQkbWFwMikpO1xuY29uc29sZS5sb2coJ0ltbXV0YWJsZS5pcygkJG1hcCwgJCRtYXAyKScsICQkbWFwPT09ICQkbWFwMik7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gSW1tdXRhYmxlLmZyb21KUyhpbml0U3RhdGUpLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0lOQyc6IHtcbiAgICBcdGxldCAkJHN0YXRlID0gSW1tdXRhYmxlLmZyb21KUyhzdGF0ZSk7XG4gICAgXHRsZXQgJCRuZXdTdGF0ZSA9ICQkc3RhdGUuc2V0KCdjb3VudGVyJywgJCRzdGF0ZS5nZXQoJ2NvdW50ZXInKSArIGFjdGlvbi5wYXlsb2FkKTtcbiAgICBcdHJldHVybiAkJG5ld1N0YXRlLnRvT2JqZWN0KCk7XG4gICAgfVxuICAgIGNhc2UgJ1RFU1QnOiB7XG4gICAgXHRjb25zb2xlLmxvZygnc3RhdGUgaW4gVEVTVCcsIHN0YXRlKTtcbiAgICBcdHJldHVybiBhY3Rpb24uZGF0YTtcbiAgICB9XG4gICAgZGVmYXVsdDogcmV0dXJuIEltbXV0YWJsZS5mcm9tSlMoc3RhdGUpO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
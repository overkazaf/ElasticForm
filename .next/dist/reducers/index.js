'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = undefined;

var _immutable = require('immutable');

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
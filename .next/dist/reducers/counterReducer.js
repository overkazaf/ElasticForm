'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.counterReducer = undefined;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $$initState = _immutable2.default.fromJS({
    counter: 1
});

var counterReducer = exports.counterReducer = function counterReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $$initState;
    var action = arguments[1];

    switch (action.type) {
        case 'INC':
            {
                return state.set('counter', state.get('counter') + action.payload);
            }
        default:
            return state;
    }
};
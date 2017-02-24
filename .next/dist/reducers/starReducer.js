'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.starReducer = undefined;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $$initState = _immutable2.default.fromJS({
    stars: 1
});

var starReducer = exports.starReducer = function starReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $$initState;
    var action = arguments[1];

    switch (action.type) {
        case 'UPDATE':
            {
                return state.set('stars', action.payload);
            }
        default:
            return state;
    }
};
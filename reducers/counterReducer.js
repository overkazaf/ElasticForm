import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    counter: 1,
});

export const counterReducer = (state = $$initState, action) => {
    switch (action.type) {
        case 'INC':{
            return state.set('counter', state.get('counter') + action.payload);
        }
        default: return state;
    }
};

import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    stars: 1,
});

export const starReducer = (state = $$initState, action) => {
    switch (action.type) {
        case 'UPDATE':{
            return state.set('stars', action.payload);
        }
        default: return state;
    }
};

import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    id: null,
    user: null,
});

export const testReducer = ($$state = $$initState, action) => {
    switch (action.type) {
        case 'FETCH_USER': {
            return $$state.set('id', action.payload);
        }
        case 'FETCH_USER_CANCELLED': {
            console.log('FETCH_USER_CANCELLED', action);
            return $$state.set('user', null);
        }
        case 'FETCH_USER_FULFILLED': {
            return $$state.set('user', Immutable.fromJS(action.payload));
        }
        default: return $$state;
    }
};

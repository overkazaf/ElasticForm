import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    collapsed: '',
});

export const dragReducer = (state = $$initState, action) => {
    switch (action.type) {
        case 'COLLAPSED':{
            return state.set('collapsed', action.payload);
        }
        default: return state;
    }
};

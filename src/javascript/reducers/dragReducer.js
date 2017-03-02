import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    collapsed: false,
});

export const dragReducer = (state = $$initState, action) => {
    switch (action.type) {
        case 'COLLAPSED':{
            return state.set('collapsed', !state.get('collapsed'));
        }
        default: return state;
    }
};

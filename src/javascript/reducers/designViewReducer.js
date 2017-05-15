import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    activeTabIndex: 0,
});

export const designViewReducer = ($$state = $$initState, action) => {
    switch (action.type) {
        case 'CHANGE_ACTIVE_TAB_INDEX': {
            return $$state.set('activeTabIndex', action.payload.tabIndex)
        }
        default: return $$state;
    }
};

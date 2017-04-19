import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    collapsed: false,
    mode: 'inline',
    data: null,
});

export const mainLayoutReducer = (state = $$initState, action) => {
    switch (action.type) {
        case 'ADD_COMPONENT': {
        	return state;
        }
        case 'UPDATE_COLLAPSED': {
        	let {
        		collapsed,
        		mode,
        	} = action.payload;

        	return state.set('collapsed', collapsed)
        		        .set('mode', mode);
        }
        default: return state;
    }
};

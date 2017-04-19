import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    collapsed: false,
    mode: 'inline',
    data: {
    	panes: [],
    },
});

export const mainLayoutReducer = (state = $$initState, action) => {
    switch (action.type) {
        case 'ADD_COMPONENT': {

        	console.log('ADD_COMPONENT ==> id', action.id);

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
        case 'UPDATE_DATA': {
        	console.log('UPDATE_DATA', action.payload);
        	console.log('original data', state.get('data'));
        	return state.set('data', action.payload);
        }
        default: return state;
    }
};

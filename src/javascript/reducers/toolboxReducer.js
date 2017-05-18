import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
	model: {},
});

export const toolboxReducer = ($$state = $$initState, action) => {
	console.log('in toolboxReducer', action);
    switch (action.type) {
    		case 'UPDATE_ACTIVE_ELEMENT': {
    			let {
    				elementProps,
    			} = action.payload;

    			return $$state.set('model', elementProps);
    		}
        default: return $$state;
    }
};

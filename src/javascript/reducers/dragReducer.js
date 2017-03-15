import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    collapsed: '',
    components: [],
});

export const dragReducer = (state = $$initState, action) => {
    switch (action.type) {
        case 'COLLAPSED': {
            return state.set('collapsed', action.payload);
        }
        case 'APPEND': {
	      	return state.set('components', state.get('components').push(action.payload));
        }
        case 'UPDATE_POS': {
        	let {
        		id,
        		comp,
        	} = action.payload;

        	return state.set('components', state.get('components').map(function(el) {
				if (el.id === id) {
					el.comp = comp;
				}
				
				return el;
        	}));
        }
        default: return state;
    }
};

import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
});

export const menubarReducer = ($$state = $$initState, action) => {
    switch (action.type) {
        case 'MENUBAR_COMMAND': {
        	console.log('action in menubarReducer', action);
        	let {
        		key,
        		keyPath,
        		item,
        		domEvent,
        	} = action.payload;

        	execCommand(key);

        	return $$state;
        }
        default: return $$state;
    }
};


function execCommand(mode) {
	switch(mode) {
		case 'add_mode': {
			
		}
	}
}
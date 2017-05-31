import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    page: {},
});

export const menubarReducer = ($$state = $$initState, action) => {
    console.log('action in menubarReducer', action);
    
    switch (action.type) {
        case 'MENUBAR_COMMAND': {
        	let {
        		key,
        		keyPath,
        		item,
        		domEvent,
        	} = action.payload;

            console.log('$$this.state in menubarReducer', $$state.toJS());

        	return execCommand(key, $$state);
        }
        case 'UPDATE_PAGE_DATA': {
            let {
                page,
            } = action.payload;

            return $$state.set('page', Immutable.fromJS(page));
        }
        default: return $$state;
    }
};


function execCommand(mode, $$state) {
	switch(mode) {
		case 'export': {
            let pageJson = $$state.get('page').toJS();
            console.log(JSON.stringify(pageJson))

            break;
		}
	}

    return $$state;
}
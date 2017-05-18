import Immutable from 'immutable';
import Storage from '../utils/Storage.js';

const store = new Storage('configModel');
const $$initState = Immutable.fromJS({
	activeId: undefined,
	elementProps: {},
});


export const statusBarReducer = ($$state = $$initState, action) => {
  console.log('statusBarReducer', action);
  switch (action.type) {
  		case 'UPDATE_ACTIVE_ELEMENT': {

  			console.log('UPDATE_ACTIVE_ELEMENT', action.payload);
  			let {
  				id,
  				elementProps,
  			} = action.payload;
  			
  			console.log('gettting element model', store.get(`${id}`));

  			return $$state.set('activeCId', id)
  									  .set('elementProps', elementProps);
  		}
      default: return $$state;
  }
};

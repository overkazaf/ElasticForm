import Immutable, { Map, List } from 'immutable';

const initState = {
	counter: 1,
};


let $$map = Immutable.fromJS({'a': 1});
let $$map2 = Immutable.fromJS($$map);
console.log('Immutable.is($$map, $$map2)', Immutable.is($$map, $$map2));
console.log('Immutable.is($$map, $$map2)', $$map=== $$map2);

export const reducer = (state = Immutable.fromJS(initState), action) => {
  switch (action.type) {
    case 'INC': {
    	let $$state = Immutable.fromJS(state);
    	let $$newState = $$state.set('counter', $$state.get('counter') + action.payload);
    	return $$newState.toObject();
    }
    case 'TEST': {
    	console.log('state in TEST', state);
    	return action.data;
    }
    default: return Immutable.fromJS(state);
  }
};
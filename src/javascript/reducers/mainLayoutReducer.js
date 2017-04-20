import Immutable, { List } from 'immutable';
import _ from 'lodash';

let layouts = [
  {
    grid: {i: 'g1', x: 0, y: 0, w: 3, h: 1},
    component: {
      type: 'IFInputNumber', 
      props: { 
        id: 1, 
        defaultValue: 0,
        visibility: true,
        locked: false,
      },
    }
  },
  {
    grid: {i: 'g2', x: 3, y: 0, w: 3, h: 1},
    component: {
      type: 'IFRangePicker', 
      props: { 
        visibility: true,
        locked: false,
      },
    }
  },
  {
    grid: {i: 'g3', x: 8, y: 0, w: 3, h: 1},
    component: {
      type: 'IFInputNumber', 
      props: { 
        id: 3, 
        defaultValue: 1,
        visibility: true,
        locked: false,
      },
    }
  }
];
let data = {
  panes: [
    {
      name: 'form1', 
      key: 'form1',
      title: '测试表单一',
      closable: false,
      layouts,
    }
  ]
};

const $$initState = Immutable.fromJS({
    collapsed: false,
    mode: 'inline',
    eidtModalVisible: false,
    data,
});

export const mainLayoutReducer = (state = $$initState, action) => {
	console.log('action in mainLayoutReducer', action.type);
    switch (action.type) {
        case 'ADD_COMPONENT': {

        	let $$newList = state.getIn(['data', 'panes', 0, 'layouts']);
        		
        	$$newList = $$newList.unshift(Immutable.fromJS({
			    grid: {i: (_.uniqueId('grid_')), x: 0, y: 0, w: 3, h: 1},
			    component: {
			      type: 'IFInputNumber', 
			      props: { 
			        visibility: true,
			        locked: false,
			      },
			    }
			  }));
        	return state.setIn(['data', 'panes', 0, 'layouts'], $$newList);
        }

        case 'UPDATE_COLLAPSED': {
        	let {
        		collapsed,
        		mode,
        	} = action.payload;

        	return state.set('collapsed', collapsed)
        		        .set('mode', mode);
        }
        case 'UPDATE_LAYOUTS': {
        	let $$layouts = state.getIn(['data', 'panes', 0, 'layouts']);
        	let $$newLayout = $$layouts.map((item, index) => {
        		let newItem = item.set('grid', Immutable.fromJS(action.payload[index]));

        		console.log('newItem', newItem.toJS());
        		return newItem;
        	});

        	return state.setIn(['data', 'panes', 0, 'layouts'], $$newLayout);
        }
        case 'EDIT_COMPONENT': {
        	console.log('editcomponent', action.payload);
        	return state;
        }
        case 'SET_MODAL_VISIBILITY': {
        	return state.set('editModalVisible', action.payload);
        }
        default: return state;
    }
};

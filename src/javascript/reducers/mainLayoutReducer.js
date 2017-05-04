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
      	id: 2,
        visibility: true,
        locked: false,
      },
    }
  },
  {
    grid: {i: 'g3', x: 8, y: 0, w: 3, h: 1},
    component: {
      type: 'IFInput', 
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
      id: 'IntelliForm-00001',
      key: 'IntelliForm-00001',
      name: 'form1',
      title: '测试表单一',
      description: '测试表单一',
      formType: 0,
      pageIndex: 1,
      theme: 'default',
      creater: 'u-001',
      createTS: 1488133454806,
      style: {
        width: 960,
      },
      nextId: 'IntelliForm-00002',
      plugIns: [],
      dataSourceIds: [],
      eventList: [
        {
          eventType: 'onLoad',
          options: {
            action: 'BringDataSource',
            expression: 'LOOKUP',
            target: ['comp4']
          }
        }
      ],
      closable: false,
      layouts,
    }
  ]
};

const $$initState = Immutable.fromJS({
    collapsed: false,
    mode: 'inline',
    editModalVisible: false,
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
  			      	id: _.uniqueId('component_'),
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
        		return newItem;
        	});

        	return state.setIn(['data', 'panes', 0, 'layouts'], $$newLayout);
        }
        case 'EDIT_COMPONENT': {
        	return state;
        }

        case 'UPDATE_COMPONENT': {
          let $$layouts = state.getIn(['data', 'panes', 0, 'layouts']);
          let index = $$layouts.findIndex((item) => {
            let itemId = item.getIn(['component', 'props', 'id']);
            return itemId == action.payload.id;
          });

          let $$newItem = $$layouts.get(index);

          console.log('$$newItem', $$newItem);

          return state;
        }

        case 'REMOVE_COMPONENT': {
        	let $$layouts = state.getIn(['data', 'panes', 0, 'layouts']);
        	let index = $$layouts.findIndex((item) => {
        		let itemId = item.getIn(['component', 'props', 'id']);
        		return itemId == action.payload.id;
        	});

        	let $$newLayout = $$layouts.delete(index);

        	return state.setIn(['data', 'panes', 0, 'layouts'], $$newLayout);
        }
        case 'SET_MODAL_VISIBILITY': {
        	return state.set('editModalVisible', action.payload);
        }
        default: return state;
    }
};

import Immutable, { List } from 'immutable';
import _ from 'lodash';

let layouts = {
  header: [
    {
      grid: {i: 'g1', x: 0, y: 0, w: 2, h: 9, minH: 9},
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
      grid: {i: 'g2', x: 2, y: 0, w: 3, h: 9, minH: 9, minW: 2},
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
      grid: {i: 'g3', x: 6, y: 0, w: 2, h: 9, minH: 9},
      component: {
        type: 'IFInputNormal', 
        props: { 
          id: 3, 
          defaultValue: 1,
          visibility: true,
          locked: false,
        },
      }
    },
    {
      grid: {i: 'g4', x: 6, y: 2, w: 2, h: 9, minW: 2, minH: 9},
      component: {
        type: 'IFDropdown', 
        props: { 
          id: 4, 
          label: 'SelectMe',
          visibility: true,
          dataSource: [
            {id: 1, label: '下拉选项一', value: 1},
            {id: 2, label: '下拉选项二', value: 2},
            {id: 3, label: '下拉选项三', value: 3},
            {id: 4, label: '下拉选项四', value: 4},
            {id: 5, label: '下拉选项五', value: 5},
          ]
        },
      }
    },
    {
      grid: {i: 'g5', x: 3, y: 2, w: 2, h: 9, minW: 2, minH: 9},
      component: {
        type: 'IFDropdown', 
        props: { 
          id: 5, 
          label: 'SelectMe2',
          visibility: true,
          theme: 'primary',
          dataSource: [
            {id: 1, label: '下拉选项一', value: 1},
            {id: 2, label: '下拉选项二', value: 2},
            {id: 3, label: '下拉选项三', value: 3},
            {id: 4, label: '下拉选项四', value: 4},
            {id: 5, label: '下拉选项五', value: 5},
          ]
        },
      }
    },
    {
      grid: {i: 'g6', x: 1, y: 2, w: 2, h: 9, minW: 2, minH: 9},
      component: {
        type: 'IFInputPhone', 
        props: { 
          id: 5, 
          visibility: true,
          theme: 'primary',
        },
      }
    }
  ],
  body: [],
  footer: [
    {
      grid: {i: 'g44', x: 6, y: 0, w: 2, h: 9, minH: 9},
      component: {
        type: 'IFButtonNormal', 
        props: { 
          id: 44, 
          theme: 'primary',
          label: '提交'
        },
      }
    }
  ],
};

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
      closable: true,
      layouts,
    },
  ]
};

const $$initState = Immutable.fromJS({
    focusId: null,
    collapsed: false,
    mode: 'inline',
    editModalVisible: false,
    data,
});

export const mainLayoutReducer = (state = $$initState, action) => {
	console.log('action calling in mainLayoutReducer', action.type);
    switch (action.type) {
        case 'ADD_COMPONENT': {

        	let $$newList = state.getIn(['data', 'panes', 0, 'layouts', 'header']);
        		
        	$$newList = $$newList.unshift(Immutable.fromJS({
  			    grid: {i: (_.uniqueId('grid_')), x: 0, y: 0, w: 3, h: 8, minH: 8},
  			    component: {
  			      type: 'IFInputNumber', 
  			      props: { 
  			      	id: _.uniqueId('component_'),
  			        visibility: true,
  			        locked: false,
  			      },
  			    }
  			  }));
        	return state.setIn(['data', 'panes', 0, 'layouts', 'header'], $$newList);
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
        	let $$layouts = state.getIn(['data', 'panes', 0, 'layouts', 'header']);

          console.log('$$UPDATE_LAYOUTS in UPDATE_LAYOUTS', $$layouts.toJS());

        	let $$newLayout = $$layouts.map((item, index) => {
        		let newItem = item.set('grid', Immutable.fromJS(action.payload[index]));
        		return newItem;
        	});

        	return state.setIn(['data', 'panes', 0, 'layouts', 'header'], $$newLayout);
        }
        case 'EDIT_COMPONENT': {
        	return state.set('focusId', action.payload.id);
        }

        case 'UPDATE_COMPONENT': {

          let $$layouts = state.getIn(['data', 'panes', 0, 'layouts', 'header']);
          let index = $$layouts.findIndex((item) => {
            let itemId = item.getIn(['component', 'props', 'id']);
            return itemId == state.get('focusId');
          });

          let $$newItem = $$layouts.get(index);
          let model = action.payload.model;

          let $$settedItem = $$newItem.updateIn(['component', 'props'], function(item) {
            return Immutable.fromJS(combineModel(item.toJS(), model));
          });

          let $$newLayout = $$layouts.set(index, $$settedItem);

          return state.setIn(['data', 'panes', 0, 'layouts', 'header'], $$newLayout);
        }

        case 'REMOVE_COMPONENT': {
        	let $$layouts = state.getIn(['data', 'panes', 0, 'layouts', 'header']);
        	let index = $$layouts.findIndex((item) => {
        		let itemId = item.getIn(['component', 'props', 'id']);
        		return itemId == action.payload.id;
        	});

        	let $$newLayout = $$layouts.delete(index);

        	return state.setIn(['data', 'panes', 0, 'layouts', 'header'], $$newLayout);
        }
        case 'SET_MODAL_VISIBILITY': {
        	return state.set('editModalVisible', action.payload);
        }
        default: return state;
    }
};

/**
 * [combineModel description]
 * @return {[type]} [description]
 */
function combineModel(component, formModel) {

  let {
    componentColor: {
      bgColor,
      fontColor,
    },
    componentTheme: {
      layoutStyle,
      theme,
      size,
    },
    formStatus: {
      autoSum,
      locked,
      mustInput,
      visibility,
    },
    inputAlign: {
      carry,
      textAlign,
    },
    inputDecoration: {
      addonBefore,
      addonAfter,
      prefix,
      suffix,
    },
    inputValue: {
      defaultValue,
      label,
      placeholder,
      value,
    },
  } = formModel;

  let newComponentDS = Object.assign(component, {
    defaultValue: defaultValue.value,
    placeholder: placeholder.value,
    value: value.value,
    label: label.value,

    addonBefore: addonBefore.value,
    addonAfter: addonAfter.value,
    prefix: prefix.value,
    suffix: suffix.value,

    autoSum,
    locked,
    mustInput,
    visibility,
  });

  return newComponentDS;
}
import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    activeCId: null,
    activePosition: null,
    activeTabIndex: 0,

    dataSourceRadioValue: 2, // 1为从已有数据源中选择，2为批量自定义数据源
    activeConfigTabKey: "2",
    config: {
      basicProps: {},
      dataSource: {},
      filterRules: {},
      eventList: [],
      validations: {},
      advanced: {},
    },
});

export const configReducer = ($$state = $$initState, action, ...args) => {
    switch (action.type) {
    	  case 'UPDATE_DATA_SOURCE_TYPE': {
    	  	let dataSourceRadioValue = $$state.get('dataSourceRadioValue');
    	  	let targetRadioValue = dataSourceRadioValue == 2 ? 1 : 2;
    	  	return $$state.set('dataSourceRadioValue', targetRadioValue);
    	  }
    	  case 'UPDATE_ACTIVE_CONFIG_KEY': {
    	  	return $$state.set('activeConfigTabKey', action.payload); 
    	  }
        case 'UPDATE_COMPONENT_DATA_SOURCE': {
          const {
            dataSource,
          } = action.payload;

          const tabIndex = state.get('activeTabIndex');
          const position = state.get('activePosition');
          const activeCId = state.get('activeCId');

          let {
            $$newItem,
            $$layouts,
            index,
          } = getTargetItemByState(state, tabIndex, position, activeCId);

          let $$updatedItem = $$newItem.updateIn(['component', 'props'], function(item) {
            let rawItem = Object.assign(item.toJS(), { dataSource });
            return Immutable.fromJS(rawItem);
          });

          let $$newLayout = $$layouts.set(index, $$updatedItem);
          return state.setIn(['data', 'panes', tabIndex, 'layouts', position], $$newLayout);
        }

        case 'UPDATE_COMPONENT_BASIC_PROPS': {
          const {
            basicProps,
          } = action.payload;

          const tabIndex = state.get('activeTabIndex');
          const position = state.get('activePosition');
          const activeCId = state.get('activeCId');

          console.log('store.getModel()', store.get(`${activeCId}`));
          let targetModel = {};

          if (store.get(`${activeCId}`)) {
            targetModel = store.get(`${activeCId}`);
          }

          targetModel['basicProps'] = basicProps;

          console.log('targetModel', targetModel);

          store.set(`${activeCId}`, targetModel);

          let {
            $$newItem,
            $$layouts,
            index,
          } = getTargetItemByState(state, tabIndex, position, activeCId);
          let $$updatedItem = $$newItem.updateIn(['component', 'props'], function(item) {
            return Immutable.fromJS(combineModel(item.toJS(), basicProps));
          });

          let $$newLayout = $$layouts.set(index, $$updatedItem);
          return state.setIn(['data', 'panes', tabIndex, 'layouts', position], $$newLayout);
        }

        case 'REMOVE_COMPONENT': {
          let {
            id,
            tabIndex,
            position,
          } = action.payload;

          tabIndex = tabIndex || state.get('activeTabIndex');
          position = position || state.get('activePosition');

        	let $$layouts = state.getIn(['data', 'panes', tabIndex, 'layouts', position]);

        	let index = $$layouts.findIndex((item) => {
        		let itemId = item.getIn(['component', 'props', 'id']);
        		return itemId == id;
        	});

        	let $$newLayout = $$layouts.delete(index);

        	return state.setIn(['data', 'panes', tabIndex, 'layouts', position], $$newLayout);
        }
        default: return $$state;
    }
};

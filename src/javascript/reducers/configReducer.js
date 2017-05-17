import Immutable from 'immutable';
import Storage from '../utils/Storage.js';
const store = new Storage('configModel');

const $$initState = Immutable.fromJS({
    activeCId: null,
    activePosition: null,
    activeTabIndex: 0,

    dataSourceRadioValue: 2, // 1为从已有数据源中选择，2为批量自定义数据源
    activeConfigTabKey: "1",
    
    // shared models
    configModel: {
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

          console.log('UPDATE_DATA_SOURCE_TYPE', dataSourceRadioValue);
    	  	let targetRadioValue = dataSourceRadioValue == 2 ? 1 : 2;
    	  	return $$state.set('dataSourceRadioValue', targetRadioValue);
    	  }
    	  case 'UPDATE_ACTIVE_CONFIG_KEY': {
    	  	return $$state.set('activeConfigTabKey', action.payload); 
    	  }
        

        case 'UPDATE_CONFIG_MODEL': {

          console.log('update-sub-model', action.payload);

          return $$state.set('configModel', Immutable.fromJS(action.payload));
        }

        

        default: return $$state;
    }
};

function getTargetItemByState(state, tabIndex, position, activeCId) {

  let $$layouts = state.getIn(['data', 'panes', tabIndex, 'layouts', position]);

  console.log('');

  let index = $$layouts.findIndex((item) => {
    let itemId = item.getIn(['component', 'props', 'id']);
    return itemId === activeCId;
  });

  let $$newItem = $$layouts.get(index);

  return {
    $$layouts,
    $$newItem,
    index,
  };
}
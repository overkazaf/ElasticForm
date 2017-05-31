import Immutable, { List } from 'immutable';
import _ from 'lodash';
import Storage from '../utils/Storage.js';
import {
  Icon,
} from 'antd';
import defaultBasicProps from '../components/Config/BasicProps/defaultBasicProps.js';

const store = new Storage('configModel');

import data from '../mock/testPageData.js';

const $$initState = Immutable.fromJS({
    activeCId: null,
    activePosition: null,
    activeTabIndex: 0,

    collapsed: false,
    mode: 'inline',
    editModalVisible: false,
    configModel: {
      basicProps: defaultBasicProps,
      dataSource: [],
      eventList: [],
      validations: [],
      filterRules: [],
    },
    data,
});

export const mainLayoutReducer = ($$state = $$initState, action) => {
    console.log(`calling mainLayoutReducer::${action.type}`, action);
    switch (action.type) {
        case 'ADD_COMPONENT': {
          let {
            id,
            position,
            tabIndex,
          } = action.payload;

          position = predictComponentPositionById(id);

          let $$newList = $$state.getIn(['data', 'panes', tabIndex, 'layouts', position]);
          let component = generateComponentTpl(id);

          console.log('adding component::', component);
          let $$updatedList = $$newList.unshift(Immutable.fromJS(component));

          return $$state.setIn(['data', 'panes', tabIndex, 'layouts', position], $$updatedList);
        }
        case 'UPDATE_LAYOUTS': {
          let {
            tabIndex,
            position,
            layouts,
          } = action.payload;

        	let $$layouts = $$state.getIn(['data', 'panes', tabIndex, 'layouts', position]);

        	let $$newLayout = $$layouts.map((item, index) => {
        		let newItem = item.set('grid', Immutable.fromJS(layouts[index]));
        		return newItem;
        	});

          console.log('$$newLayout', $$newLayout.toJS());

        	return $$state.setIn(['data', 'panes', tabIndex, 'layouts', position], $$newLayout);
        }

        case 'EDIT_COMPONENT': {
          let {
            id,
            tabIndex,
            position,
          } = action.payload;

          let {
            $$newItem,
            $$layouts,
            index,
          } = getTargetItemByState($$state, tabIndex, position, id);
          
          let targetConfigModel = store.get(`${id}`);

          if (!targetConfigModel) {
            let componentModel = $$newItem.getIn(['component', 'props']).toJS();
            targetConfigModel = _.merge({
              basicProps: defaultBasicProps,
            }, componentModel);
          }

        	return $$state.set('activeCId', id)
                      .set('activePosition', position)
                      .set('activeTabIndex', tabIndex)
                      .set('configModel', targetConfigModel);
        }
        case 'REEDIT_COMPONENT': {
          const id = $$state.get('activeCId');
          return $$state.set('configModel', store.get(`${id}`))
        }

        case 'UPDATE_COMPONENT_DATA_SOURCE': {
          const {
            dataSource,
          } = action.payload;

          const tabIndex = $$state.get('activeTabIndex');
          const position = $$state.get('activePosition');
          const activeCId = $$state.get('activeCId');

          console.log('activeCId', activeCId);

          let {
            $$newItem,
            $$layouts,
            index,
          } = getTargetItemByState($$state, tabIndex, position, activeCId);

          let $$updatedItem = $$newItem.updateIn(['component', 'props'], function(item) {
            let rawItem = Object.assign(item.toJS(), { dataSource });
            return Immutable.fromJS(rawItem);
          });

          console.log('dataSource', dataSource);

          let $$newLayout = $$layouts.set(index, $$updatedItem);
          return $$state.setIn(['data', 'panes', tabIndex, 'layouts', position], $$newLayout);
        }

        case 'UPDATE_ADVANCED_CONFIG': {
          const {
            eventMap,
          } = action.payload;

          let eventList = Object.keys(eventMap).map((evtName, idx) => {
            let actionList = eventMap[evtName];

            let list = actionList.map((action) => {
              let {
                type,
                target,
                expr,
              } = action;

              return {
                type,
                target,
                expr,
              };
            });

            return {
              eventType: evtName,
              actionList: list,
            }
          });

          // 更新当前组件的事件列表
          const tabIndex = $$state.get('activeTabIndex');
          const position = $$state.get('activePosition');
          const activeCId = $$state.get('activeCId');

          let {
            $$newItem,
            $$layouts,
            index,
          } = getTargetItemByState($$state, tabIndex, position, activeCId);

          let $$updatedItem = $$newItem.updateIn(['component', 'props'], function(item) {
            let rawItem = Object.assign(item.toJS(), { eventList });
            return Immutable.fromJS(rawItem);
          });

          console.log('eventList updated', eventList);
          console.log('updatedItem updated', $$updatedItem.toJS());

          let $$newLayout = $$layouts.set(index, $$updatedItem);
          return $$state.setIn(['data', 'panes', tabIndex, 'layouts', position], $$newLayout);
        }

        case 'UPDATE_COMPONENT_BASIC_PROPS': {
          const {
            basicProps,
          } = action.payload;

          const tabIndex = $$state.get('activeTabIndex');
          const position = $$state.get('activePosition');
          const activeCId = $$state.get('activeCId');

          let {
            $$newItem,
            $$layouts,
            index,
          } = getTargetItemByState($$state, tabIndex, position, activeCId);

          let $$updatedItem = $$newItem.updateIn(['component', 'props'], function(item) {
            let targetBasicProps = _.merge(item.get('basicProps').toJS(), basicProps);
            let $$targetItem = item.set('basicProps', Immutable.fromJS(targetBasicProps));
            return $$targetItem;
          });

          console.log('activeCId', activeCId);

          let storedItem = store.get(`${activeCId}`);
          console.log('storedItem', storedItem);
          if (!storedItem) {
            store.set(`${activeCId}`, $$updatedItem.getIn(['component', 'props']).toJS());
          } else {
            let target = _.merge(storedItem, $$updatedItem.getIn(['component', 'props']).toJS());
            store.set(`${activeCId}`, target);
          }

          console.log(`store.get(${activeCId})`, store.get(`${activeCId}`));
          console.log(`setting model::${activeCId}`, store.get(`${activeCId}`));

          let $$newLayout = $$layouts.set(index, $$updatedItem);

          console.log('newLayout in UPDATE_COMPONENT_BASIC_PROPS');
          return $$state.setIn(['data', 'panes', tabIndex, 'layouts', position], $$newLayout);
        }

        case 'REMOVE_COMPONENT': {
          let {
            id,
            tabIndex,
            position,
          } = action.payload;

          tabIndex = tabIndex || $$state.get('activeTabIndex');
          position = position || $$state.get('activePosition');

          let $$layouts = $$state.getIn(['data', 'panes', tabIndex, 'layouts', position]);

          let index = $$layouts.findIndex((item) => {
            let itemId = item.getIn(['component', 'props', 'id']);
            return itemId == id;
          });

          let $$newLayout = $$layouts.delete(index);

          return $$state.setIn(['data', 'panes', tabIndex, 'layouts', position], $$newLayout);
        }

        case 'UPDATE_ACTIVE_CID': {
          let {
            id,
          } = action.payload;

          console.log('UPDATE_ACTIVE_CID', id);

          return $$state.set('activeCId', id);
        }

        case 'SET_MODAL_VISIBILITY': {
        	return $$state.set('editModalVisible', action.payload);
        }

        case 'UPDATE_COLLAPSED': {
            let {
                collapsed,
                mode,
            } = action.payload;

            return $$state.set('collapsed', collapsed)
                        .set('mode', mode);
        }

        case 'UPDATE_CONFIG_MODEL': {

          console.log('UPDATE_CONFIG_MODEL', action.payload);
          return $$state.set('configModel', Immutable.fromJS(action.payload));
        }
        default: return $$state;
    }
};

function getTargetItemByState(state, tabIndex, position, activeCId) {

  let $$layouts = state.getIn(['data', 'panes', tabIndex, 'layouts', position]);
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
    inputAlignCarry: {
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
    fontStyles: {
      fontFamily,
      fontSize,
      fontStyle,
    },
  } = formModel;


  let newComponentDS = Object.assign(component, {
    layoutStyle: layoutStyle.value,
    theme: theme.value,
    size: size.value,

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

    inputAlignCarry: {
      textAlign,
      carry,
    },

    fontStyles: {
      fontFamily: fontFamily.value,
      fontSize: fontSize.value,
      fontStyle: {
        options: fontStyle.values,
      },
      fontColor: fontColor.value,
    },

    bgColor: bgColor.value,

  });

  return newComponentDS;
}


function generateComponentTpl(componentType) {
  const componentId = _.uniqueId(`component_${componentType}_`);
  const gridId = _.uniqueId(`grid_${componentType}_`);
  return {
    grid: getDefaultComponentGrid(gridId, componentType),
    component: {
      type: componentType, 
      props: getDefaultComponentProps(componentId, componentType),
    }
  };
}

/**
 * [getDefaultComponentGrid 根据不同的组件生成不一样的默认布局]
 * @param  {[type]} gridId        [description]
 * @param  {[type]} componentType [description]
 * @return {[type]}               [description]
 */
function getDefaultComponentGrid(gridId, componentType) {
  let extraOption = {};

  switch(componentType) {
    case 'IFInputPhone':
    case 'IFInputNumber':
    case 'IFInputNormal':
      extraOption = {
        h: 15, 
        minH: 2,
      }
      break;
  }

  return _.merge({
      i: gridId, 
      x: 0, 
      y: 0, 
      w: 3, 
      h: 9, 
      miW: 2,
      minH: 2,
  }, extraOption);
}

function getDefaultComponentProps(componentId, componentType) {
  const defaultCreationFn = (componentId, componentName='组件', options = {}) => {
    let templateModel = _.merge({
      basicProps: defaultBasicProps,
      dataSource: {},
      eventList: [],
      validations: [],
      filterRules: [],
      pushDownProfile: [],
    }, {
      id: componentId,
      name: `${componentName}_${componentId}`,
      basicProps: {
        inputValue: {
          label: {
            value: `${componentName}`,
          }
        },
      },
      dataSource: [],
    });

    return _.merge(templateModel, options);
  };

  const defaultComponentPropsMap = {
    'IFDropdown': defaultCreationFn,
    'IFLabel': defaultCreationFn,
    'IFButtonSubmit': defaultCreationFn,
    'IFButtonReset': defaultCreationFn,
    'IFInputPhone': defaultCreationFn,
    'IFInputNumber': defaultCreationFn,
    'IFInputNormal': defaultCreationFn,
  };

  let extraOption = {};

  const compNameMap = {
    'IFDropdown': '下拉框',
    'IFLabel': '标签文字',
    'IFButtonSubmit': '提交按钮',
    'IFButtonReset': '重置按钮',
    'IFInputPhone': '手机号码',
    'IFInputNumber': '数字',
    'IFInputNormal': '普通文本',
  };

  let basicProps = {
    fontStyles: {
      fontSize: {
        value: '14px',
      },
      textAlign: {
        value: 'center',
      },
    },
  };

  switch (componentType) {
    case 'IFDropdown': {
      extraOption = {
        basicProps,
      };
      break;
    }
    case 'IFButtonReset': {
      extraOption = {
        ..._.merge(basicProps, {
          componentTheme: {
            theme: {
              value: 'default',
            },
          }
        })
      }
      break;
    }
    case 'IFButtonSubmit': {
      extraOption = {
        ..._.merge(basicProps, {
          componentTheme: {
            theme: {
              value: 'primary',
            },
          }
        })
      }
      break;
    }
    case 'IFInputNormal':
    case 'IFInputPhone': {
      extraOption = {
        ..._.merge(basicProps, {
          formStatus: {
            mustInput: {
              value: false,
            }
          }
        })
      }
      break;
    }
    default: 
      console.log('using default config when building new component');
  }

  console.log('extraOption', extraOption);

  return defaultComponentPropsMap[componentType](componentId, compNameMap[componentType], extraOption);
}


/**
 * [predictComponentPositionById 根据组件id确定其位置]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function predictComponentPositionById(id, position) {
  if (typeof position !== 'undefined') return position;

  switch(id) {
    case 'IFButtonSubmit':
    case 'IFButtonReset':
      return 'footer';
    case 'IFSmartTable':
      return 'body';
    default:
      return 'header';
  }
}
import Immutable, { List } from 'immutable';
import _ from 'lodash';
import Storage from '../utils/Storage.js';
import {
  Icon,
} from 'antd';
import defaultBasicProps from '../components/Config/BasicProps/defaultBasicProps.js';

const store = new Storage('configModel');

let layouts = {
  header: [
    {
      grid: {i: 'g1', x: 0, y: 0, w: 2, h: 9, minH: 9},
      component: {
        type: 'IFLabel', 
        props: { 
          id: 1, 
          label: '标签文字',
          visibility: true,
          locked: false,
          fontStyle: {
            fontFamily: 'Microsoft Yahei',
            fontSize: '12px',
            fontStyle: {
              options: [
                {id: 'fontWeight', value: 'normal'},
                {id: 'fontStyle', value: 'normal'},
                {id: 'textDecoration', value: 'none'},
              ]
            }
          },
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
          id: 6, 
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
          theme: 'dashed',
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
    activeCId: null,
    activePosition: null,
    activeTabIndex: 0,
    configModel: undefined,

    collapsed: false,
    mode: 'inline',
    editModalVisible: false,
    data,
});


export const mainLayoutReducer = (state = $$initState, action) => {
    switch (action.type) {
        case 'ADD_COMPONENT': {

          let {
            id,
            position,
            tabIndex,
          } = action.payload;

          position = predictComponentPositionById(id);

        	let $$newList = state.getIn(['data', 'panes', tabIndex, 'layouts', position]);
        	let $$updatedList = $$newList.unshift(Immutable.fromJS(generateComponentTpl(id)));

        	return state.setIn(['data', 'panes', 0, 'layouts', position], $$updatedList);
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
          let {
            tabIndex,
            position,
            layouts,
          } = action.payload;

        	let $$layouts = state.getIn(['data', 'panes', tabIndex, 'layouts', position]);

        	let $$newLayout = $$layouts.map((item, index) => {
        		let newItem = item.set('grid', Immutable.fromJS(layouts[index]));
        		return newItem;
        	});

        	return state.setIn(['data', 'panes', tabIndex, 'layouts', position], $$newLayout);
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
          } = getTargetItemByState(state, tabIndex, position, id);
          
          let targetConfigModel = store.get(`${id}`);

          console.log('targetConfigModel', targetConfigModel);

          if (!targetConfigModel) {
            let componentModel = $$newItem.getIn(['component']).toJS();
            targetConfigModel = convertComponentModel2Config(componentModel);

            store.set(`${id}`, targetConfigModel);
          }

        	return state.set('activeCId', id)
                      .set('activePosition', position)
                      .set('activeTabIndex', tabIndex)
                      .set('configModel', targetConfigModel);
        }
        case 'REEDIT_COMPONENT': {
          const id = state.get('activeCId');
          return state.set('configModel', store.get(`${id}`))
        }

        case 'UPDATE_ACTIVE_CID': {
          let {
            id,
          } = action.payload;

          return state.set('activeCId', id);
        }

        case 'UPDATE_COMPONENT_DATASOURCE': {
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
        case 'SET_MODAL_VISIBILITY': {
        	return state.set('editModalVisible', action.payload);
        }
        default: return state;
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
    fontStyle: {
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

    fontStyle: {
      fontFamily: fontFamily.value,
      fontSize: fontSize.value,
      fontStyle: {
        options: fontStyle.values,
      },
      fontColor: fontColor.value,
      textAlign,
    },

    bgColor: bgColor.value,

  });

  return newComponentDS;
}


function getBasicPropsByModel(model) {
  let {
    type,
    props,
  } = model;

  let {
    bgColor,
    size,
    theme,
    layoutStyle,
    visibility,
    locked,
    mustInput,
    autoSum,
    textAlign,
    carry,
    addonBefore,
    addonAfter,
    prefix,
    suffix,
    label,
    placeholder,
    defaultValue,
    value,
    fontStyle: {
      fontSize,
      fontFamily,
      fontStyle,
    },
  } = props;

  console.log('fontStyle', fontStyle);

  switch(type) {
    case 'IFLabel':
      return Object.assign(defaultBasicProps, {
          componentColor: {
            fontColor: {
              id: 'fontColor',
              label: '文字颜色',
              value: label,
            },
            bgColor: {
              id: 'bgColor',
              label: '背景颜色',
              value: bgColor,
            },
          },
          componentTheme: {
            size: {
              id: 'size',
              value: size,
              label: '组件尺寸',
              title: '选择组件尺寸',
              options: [
                {id: 1, label: '默认大小', value: 'default'},
                {id: 2, label: '大尺寸', value: 'large'},
                {id: 3, label: '小尺寸', value: 'small'},
              ]
            },
            theme: {
              id: 'theme',
              value: theme,
              label: '默认主题',
              title: '选择组件主题',
              options: [
                {id: 1, label: 'default', value: 'default'},
                {id: 2, label: 'primary', value: 'primary'},
                {id: 3, label: 'dashed', value: 'dashed'},
                {id: 4, label: 'danger', value: 'danger'},
              ]
            },
            layoutStyle: {
              id: 'layoutStyle',
              value: layoutStyle,
              label: '组件风格',
              title: '选择组件风格',
              options: [
                {id: 1, label: '垂直风格', value: 'vertical'},
                {id: 2, label: '水平风格', value: 'horizontal'},
              ]
            },
          },
          formStatus: {
            visibility,
            locked,
            mustInput,
            autoSum,
          },
          inputAlignCarry: {
            textAlign,
            carry,
          },
          inputDecoration: {
            addonBefore: {
              id: 'addonBefore',
              type: 'input',
              label: '前缀文字',
              addonBefore: '前缀',
              addonAfter: '',
              prefix: '',
              suffix: '',
              placehodler: '如：数量, 单价, 总金额 等',
              value: addonBefore,
            },
            addonAfter: {
              id: 'addonAfter',
              type: 'input',
              label: '后缀文字',
              addonBefore: '',
              addonAfter: '后缀',
              prefix: '',
              suffix: '',
              placehodler: '如：元, ￥, $ 等',
              value: addonAfter,
            },
            prefix: {
              id: 'prefix',
              type: 'select',
              label: '前置图标',
              placehodler: '请选择前置图标',
              value: prefix,
              options: [
                { id: 1, value: 'user', icon: 'user' },
                { id: 2, value: 'lock', icon: 'lock' },
                { id: 3, value: 'cloud', icon: 'cloud' },
                { id: 4, value: 'smile', icon: 'smile' },
                { id: 5, value: 'link', icon: 'link' },
                { id: 6, value: 'mail', icon: 'mail' },
              ],
            },
            suffix: {
              id: 'suffix',
              type: 'select',
              label: '后置图标',
              placehodler: '请选择后置图标',
              value: suffix,
              options: [
                { id: 1, value: (<Icon type="close-circle" />), icon: 'close-circle' },
                { id: 2, value: (<Icon type="close-circle-o" />), icon: 'close-circle-o' },
                { id: 3, value: (<Icon type="check-circle" />), icon: 'check-circle' },
                { id: 4, value: (<Icon type="check-circle-o" />), icon: 'check-circle-o' },
              ],
            },
          },
          inputValue: {
            label: {
              id: 'label',
              label: '标签文字',
              value: label,
              defaultValue: '',
              placeholder: '组件标签文字',
            },
            placeholder: {
              id: 'placeholder',
              label: '提示文字',
              value: placeholder,
              defaultValue: '',
              placeholder: '组件提示文字',
            },
            defaultValue: {
              id: 'defaultValue',
              label: '默认值',
              value: defaultValue,
              defaultValue: '',
              placeholder: '组件默认值',
            },
            value: {
              id: 'value',
              label: '当前值',
              value: value,
              defaultValue: '',
              placeholder: '存在则覆盖默认值',
            },
          },
          fontStyle: {
            fontStyle: {
              id: 'fontStyle',
              label: '文字样式',
              values: fontStyle.values || [],
              options: [
                {id: 'fontWeight', label: '加粗', value: 'bold', checked: false},
                {id: 'fontStyle', label: '斜体', value: 'italic', checked: false},
                {id: 'textDecoration', label: '下划线', value: 'underline', checked: false}
              ]
            },
            fontSize: {
              id: 'fontSize',
              label: '字号大小',
              title: '请选择字号大小',
              value: fontSize || '12px',
              options: [
                {id: 'ft10', label: '10px', value: '10px'},
                {id: 'ft12', label: '12px', value: '12px'},
                {id: 'ft14', label: '14px', value: '14px'},
                {id: 'ft16', label: '16px', value: '16px'},
                {id: 'ft20', label: '20px', value: '20px'},
                {id: 'ft24', label: '24px', value: '24px'},
                {id: 'ft28', label: '28px', value: '28px'},
                {id: 'ft32', label: '32px', value: '32px'},
                {id: 'ft36', label: '36px', value: '36px'},
                {id: 'ft40', label: '40px', value: '40px'},
                {id: 'ft44', label: '44px', value: '44px'},
                {id: 'ft48', label: '48px', value: '48px'},
                {id: 'ft52', label: '52px', value: '52px'},
                {id: 'ft56', label: '56px', value: '56px'},
                {id: 'ft60', label: '60px', value: '60px'},
                {id: 'ft64', label: '64px', value: '64px'},
                {id: 'ft68', label: '68px', value: '68px'},
              ]

            },
            fontFamily: {
              id: 'fontFamily',
              label: '字体',
              title: '请选择字体',
              value: fontFamily || 'sans serif',
              options: [
                {id: 'ff1', label: 'sans serif', value: 'sans serif'},
                {id: 'ff2', label: '微软雅黑', value: 'Microsoft Yahei'},
                {id: 'ff3', label: '黑体', value: 'Heiti'},
              ],
            },
          },
      });
  }

}

function getDataSourceByModel(model) {
  // TODO
  return {};
}

function convertComponentModel2Config(componentModel) {

  let basicProps = getBasicPropsByModel(componentModel);
  let dataSource = getDataSourceByModel(componentModel);

  console.log('conversion', basicProps);

  return {
    basicProps,
    dataSource,
  };
}

function generateComponentTpl(componentType) {
  const componentId = _.uniqueId(`${componentType}_`);
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
  
  return {
      i: gridId, 
      x: 0, 
      y: 0, 
      w: 3, 
      h: 16, 
      miW: 2,
      minH: 12,
  };
  // switch(componentType) {
  //   case 'IFButtonSubmit':
  //   case 'IFButtonReset':
  //     return {
  //       i: gridId, 
  //       x: 0, 
  //       y: 0, 
  //       w: 3, 
  //       h: 9, 
  //       miW: 2,
  //       minH: 9,
  //     };
  //   default:
  //     return {
  //       i: gridId, 
  //       x: 0, 
  //       y: 0, 
  //       w: 3, 
  //       h: 16, 
  //       miW: 2,
  //       minH: 12,
  //   };
  // }
}

function getDefaultComponentProps(componentId, componentType) {
  const defaultComponentPropsMap = {
    'IFDropdown': (componentId) => {
      return {
        id: componentId,
        visibility: true,
        locked: false,
        label: `下拉框${componentId}`,
        dataSource: [],
      };
    },
    'IFLabel': (componentId) => {
      return {
        id: componentId,
        visibility: true,
        locked: false,
        label: `标签${componentId}`,
        fontStyle: {
          fontFamily: 'Microsoft Yahei',
          fontSize: '12px',
          fontStyle: {
            options: [
              {id: 'fontWeight', value: 'normal', checked: false},
              {id: 'fontStyle', value: 'normal', checked: false},
              {id: 'textDecoration', value: 'none', checked: false},
            ]
          }
        }
      };
    }
  };

  if (componentType in defaultComponentPropsMap) {
    return defaultComponentPropsMap[componentType](componentId);
  } else {
    return { 
      id: componentId,
      visibility: true,
      locked: false,
      label: `组件${componentId}`,
      dataSource: [],
    };
  }
}


/**
 * [predictComponentPositionById 根据组件id]
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
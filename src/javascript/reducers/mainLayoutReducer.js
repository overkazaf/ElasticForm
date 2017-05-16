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
    data,
});


export const mainLayoutReducer = (state = $$initState, action) => {
    switch (action.type) {
        
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

          console.log('targetConfigModel::before', targetConfigModel);

          if (!targetConfigModel) {
            let componentModel = $$newItem.getIn(['component']).toJS();
            console.log('componentModel', componentModel);

            targetConfigModel = convertComponentModel2Config(componentModel);
            console.log('convertComponentModel2Config -> targetConfigModel', targetConfigModel);

            store.set(`${id}`, targetConfigModel);
          }

          console.log('targetConfigModel::after', targetConfigModel);

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

        case 'SET_MODAL_VISIBILITY': {
        	return state.set('editModalVisible', action.payload);
        }

        case 'UPDATE_COLLAPSED': {
            let {
                collapsed,
                mode,
            } = action.payload;

            return state.set('collapsed', collapsed)
                        .set('mode', mode);
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

function getBasicPropsByModel(model) {
  let {
    type,
    props: {
      basicProps,
    },
  } = model;

  console.log('defaultBasicProps', defaultBasicProps);
  console.log('basicProps', basicProps);
  console.log('mergedProps', _.merge(defaultBasicProps, basicProps));

  switch(type) {
    case 'IFLabel':
      return _.merge(defaultBasicProps, basicProps);
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

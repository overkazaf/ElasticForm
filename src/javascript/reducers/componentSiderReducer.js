import Immutable from 'immutable';

const $$initState = Immutable.fromJS({   
    
});

export const componentSiderReducer = ($$state = $$initState, action, ...args) => {
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

        

        default: return $$state;
    }
};

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
        fontStyles: {
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
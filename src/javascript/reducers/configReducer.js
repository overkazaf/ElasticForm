import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    dataSourceRadioValue: 2,
});

export const configReducer = ($$state = $$initState, action) => {
    console.log('action in configReducer', action);
    switch (action.type) {
        case 'CHANGE_DATASOURCE_TYPE': {
            return $$state.set('dataSourceRadioValue', action.payload);
        }
        case 'UPDATE_COMPONENT_DATASOURCE': {
            

            return $$state;
        }
        default: return $$state;
    }
};

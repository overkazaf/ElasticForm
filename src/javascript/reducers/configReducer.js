import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    dataSourceRadioValue: 2,
});

export const configReducer = ($$state = $$initState, action, ...args) => {
    console.log('action in configReducer', action);
    console.log('state in configReducer', $$state.toJS());
    switch (action.type) {
        case 'CHANGE_DATASOURCE_TYPE': {
            return $$state.set('dataSourceRadioValue', action.payload);
        }
        default: return $$state;
    }
};

import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    dataSourceRadioValue: 2,
});

export const configReducer = ($$state = $$initState, action, ...args) => {
    switch (action.type) {
        case 'CHANGE_DATASOURCE_TYPE': {
            return $$state.set('dataSourceRadioValue', action.payload);
        }
        default: return $$state;
    }
};

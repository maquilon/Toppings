import Immutable from 'immutable';
import Constants from '../constants/constants';
import * as Actions from '../actions/actionCreators';

// Order Initial State
const orderInitialState = {
    pizza: Immutable.fromJS({
        orders: []
    })
};

function orderReducer(state = orderInitialState.pizza, action) {
    switch (action.type) {
        
        case Constants.LOAD_ORDERS:
            state = state.updateIn(['orders'], (data) => data = Immutable.fromJS(action.Orders));
            return state;

        default:
            return state;
    }
       
}

export { orderReducer, orderInitialState }
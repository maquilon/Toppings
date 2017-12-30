import axios from 'axios';
import Constants from '../constants/constants';
import {addNotification} from '../actions/notificationActions';


/* eslint-disable no-console */

class OrderActions 
{
    static loadOrders(Orders) {
        return {
            type: Constants.LOAD_ORDERS,
            Orders
        }
    }


    // ===================================================================== //
    // ===================================================================== //
    // ========================== API: ASYNC CALLS ========================= //
    // ===================================================================== //
    // ===================================================================== //
    static loadOrdersAsync() {
        return function(dispatch) {
            return new Promise((resolve, reject) => {
                axios.get("http://files.olo.com/pizzas.json")
                .then(function (response) {
                    dispatch(addNotification({ title: 'Success', message: 'The Orders were successfully loaded.', level: 'success' }));
                    dispatch(OrderActions.loadOrders(response.data));
                })
                .catch(function (response) {
                    dispatch(addNotification({ title: 'Error', message: 'Error loading Orders ' + response, level: 'error', autoDismiss: 0 }));
                });
            });
        };
    }


}

export default OrderActions;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Loader from 'react-loader';
import OrderActions from '../actions/actionCreators';
import _ from 'lodash';

class Home extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        // Loading Async json object to the state
        this.props.dispatch(OrderActions.loadOrdersAsync());
    }

    render() {
        var toppings = {};
        // Creating Hash Table
        this.props.orders.get('orders').map((order, i) => {
            for (var i = 0; i < order.get('toppings').size; i++) {
                toppings[order.get('toppings')] = 1 + (toppings[order.get('toppings')] || 0)
            }
        })

        // Sorting by frequncy
        let sortedToppings = [];
        for (var key in toppings) {
            console.log('key -->', key.replace("List", ""))
            if (Object.prototype.hasOwnProperty.call(toppings, key)) {
                let val = toppings[key];
                sortedToppings.push({ key, val })
            }
        }
        sortedToppings = _.sortBy(sortedToppings, 'val').reverse();

        // Display the results on the table.
        let rows = [];
        let TopFrequentOrders = sortedToppings.forEach((topping, i) => {
            if (i > 20) {
                return true
            } else {
                rows.push(<tr key={i} className="table-dark" >
                    <td>{i + 1}</td>
                    <td>{topping.key.replace("List [ ", "").replace("]", "")}</td>

                    <td>{topping.val}</td>
                </tr>)
            }
        })

        return (
            <div>
                <div className="well">
                    <h1>Popular pizza topping combinations</h1>
                </div>
                <div >
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr >
                                <th scope="row">Rank</th>
                                <th scope="row">Topping</th>
                                <th scope="row">Frequency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        orders: state.pizza
    };
}

export default connect(mapStateToProps)(Home);
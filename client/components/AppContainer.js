import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
    return {
        //courses: state.orders
    };
}

const App = connect(mapStateToProps)(Main);

export default App;
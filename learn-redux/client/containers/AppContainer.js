import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from '../components/Main';

function mapStateToProps(state) {
  return {}
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from '../actions/posts';

import Home from '../components/Home';

function mapStateToProps(state) {
	console.log('xjxx', state);
  return {
    posts: state.posts,
    comments: state.comments,
    postsList: state.posts.postsList
  }
}


function mapDispachToProps(dispatch) {
  // return bindActionCreators(

  // 	actionCreators,
  // 	dispatch
  // );
  return {
    fetchPosts: () => {
      dispatch(fetchPosts()).then((response) => {
            !response.error ? dispatch(fetchPostsSuccess(response.payload)) : dispatch(fetchPostsFailure(response.payload));
          });
    },
    test: actionCreators
  }
}

const HomeContainer = connect(mapStateToProps, mapDispachToProps)(Home);

export default HomeContainer;

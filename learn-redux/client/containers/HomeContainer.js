import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { increment, fetchPosts, fetchPostsSuccess, fetchPostsFailure } from '../actions/posts';

import Home from '../components/Home';

function mapStateToProps(state) {
  return {
    comments: state.comments,
    postsList: state.posts.postsList

  }
}

function mapDispachToProps(dispatch) {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts()).then((response) => {
        !response.error ? dispatch(fetchPostsSuccess(response.payload)) : dispatch(fetchPostsFailure(response.payload));
        //the following for demo loading ...
        // var delay=1000; //1 second
        // setTimeout(function() {
        //   !response.error ? dispatch(fetchPostsSuccess(response.payload)) : dispatch(fetchPostsFailure(response.payload));
        // }, delay);
            
      });
    },
    like: (index, post) => {
      dispatch(increment(index, post));
    },
    test: actionCreators
  }
}

const HomeContainer = connect(mapStateToProps, mapDispachToProps)(Home);

export default HomeContainer;

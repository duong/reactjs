import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from '../actions/posts';

import Single from '../components/Single';

function mapStateToProps(state, ownProps) {
  console.log('ownProps', ownProps);
  return {
    comments: state.comments,
    postsList: state.posts.postsList,
    params: state.params
  }
}

function mapDispachToProps(dispatch) {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts()).then((response) => {
            !response.error ? dispatch(fetchPostsSuccess(response.payload)) : dispatch(fetchPostsFailure(response.payload));
          });
    },
    test: actionCreators
  }
}

const SinglePhotoContainer = connect(mapStateToProps, mapDispachToProps)(Single);

export default SinglePhotoContainer;

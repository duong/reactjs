import axios from 'axios';

//comment list
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const RESET_COMMENTS = 'RESET_COMMENTS';

//Create new comment
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';
export const RESET_NEW_COMMENT = 'RESET_NEW_COMMENT';

//Validate comment fields like Title, Categries on the server
export const VALIDATE_COMMENT_FIELDS = 'VALIDATE_COMMENT_FIELDS';
export const VALIDATE_COMMENT_FIELDS_SUCCESS = 'VALIDATE_COMMENT_FIELDS_SUCCESS';
export const VALIDATE_COMMENT_FIELDS_FAILURE = 'VALIDATE_COMMENT_FIELDS_FAILURE';
export const RESET_COMMENT_FIELDS = 'RESET_COMMENT_FIELDS';

//Fetch comment
export const FETCH_COMMENT = 'FETCH_COMMENT';
export const FETCH_COMMENT_SUCCESS = 'FETCH_COMMENT_SUCCESS';
export const FETCH_COMMENT_FAILURE = 'FETCH_COMMENT_FAILURE';
export const RESET_ACTIVE_COMMENT = 'RESET_ACTIVE_COMMENT';

//Delete comment
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';
export const RESET_DELETED_COMMENT = 'RESET_DELETED_COMMENT';



//const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://stagram-api.local-server.com' : 'http://stagram-api.local-server.com';
const ROOT_URL = "http://localhost:8089"

export function fetchPosts() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/posts`,
    headers: []
  });
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
}

export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
}

export function validatePostFields(props) {
  //note: we cant have /posts/validateFields because it'll match /posts/:id path!
  const request = axios.post(`${ROOT_URL}/posts/validate/fields`, props);

  return {
    type: VALIDATE_POST_FIELDS,
    payload: request
  };
}

export function validatePostFieldsSuccess() {
  return {
    type: VALIDATE_POST_FIELDS_SUCCESS
  };
}

export function validatePostFieldsFailure(error) {
  return {
    type: VALIDATE_POST_FIELDS_FAILURE,
    payload: error
  };
}

export function resetPostFields() {
  return {
    type: RESET_POST_FIELDS
  }
};


export function createPost(props, tokenFromStorage) {
  //const request = axios.post(`${ROOT_URL}/posts`, props);
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/posts`,
   headers: {'Authorization': `Bearer ${tokenFromStorage}`}
  });

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function createPostSuccess(newPost) {
  return {
    type: CREATE_POST_SUCCESS,
    payload: newPost
  };
}

export function createPostFailure(error) {
  return {
    type: CREATE_POST_FAILURE,
    payload: error
  };
}

export function resetNewPost() {
  return {
    type: RESET_NEW_POST
  }
};

export function resetDeletedPost() {
  return {
    type: RESET_DELETED_POST
  }
};

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}


export function fetchPostSuccess(activePost) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: activePost
  };
}

export function fetchPostFailure(error) {
  return {
    type: FETCH_POST_FAILURE,
    payload: error
  };
}

export function resetActivePost() {
  return {
    type: RESET_ACTIVE_POST
  }
};

export function deletePost(id, tokenFromStorage) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/posts/${id}`,
   headers: {'Authorization': `Bearer ${tokenFromStorage}`}
  });
  return {
    type: DELETE_POST,
    payload: request
  };
}

export function deletePostSuccess(deletedPost) {
  return {
    type: DELETE_POST_SUCCESS,
    payload: deletedPost
  };
}

export function deletePostFailure(response) {
  return {
    type: DELETE_POST_FAILURE,
    payload: response
  };
}
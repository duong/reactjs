import {
  //import actions for executes list posts
	FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, RESET_POSTS,
  //import actions for executes single post
	FETCH_POST, FETCH_POST_SUCCESS,  FETCH_POST_FAILURE, RESET_ACTIVE_POST,
  //import actions  to created new single post
	CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE, RESET_NEW_POST,
  //import actions to delete single post
	DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, RESET_DELETED_POST,
  //import action to validate record
  VALIDATE_POST_FIELDS,VALIDATE_POST_FIELDS_SUCCESS, VALIDATE_POST_FIELDS_FAILURE, RESET_POST_FIELDS
} from '../actions/posts';

//default state
const INITIAL_STATE = {
  postsList: {
    posts: [], error:null, loading: false
  },  
	newPost:{
    post:null, error: null, loading: false
  }, 
	activePost:{
    post:null, error:null, loading: false
  }, 
	deletedPost: {
    post: null, error:null, loading: false
  },
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    //facebook login
    case 'FACEBOOK_LOGIN': 
      return {
      ...state,
      user: {
        status: 'authenticated'
      } 
    }; 
    case 'INCREMENT_LIKES': //increment like when user click on like button
      console.log("Incrementing Likes!!");
      const i = action.index;
      const posts =  [
        ...state.postsList.posts.slice(0,i), // before the one we are updating
        {...state.postsList.posts[i], likes: state.postsList.posts[i].likes},
        ...state.postsList.posts.slice(i + 1), // after the one we are updating
      ];
      return { 
          ...state,
          postsList: { //update postsList in the state
            posts: posts,
            error:null, 
            loading: false
          } 
      };
  case FETCH_POSTS:// start fetching posts and set loading = true
  	return {
      ...state,
      postsList: {
        posts:[], error: null, 
        loading: true
      } 
    }; 
  case FETCH_POSTS_SUCCESS:// return list of posts and make loading = false
    return { 
      ...state, 
      postsList: {
        posts: action.payload.data, 
        error:null, 
        loading: false
      } 
    };
  case FETCH_POSTS_FAILURE:// return error and make loading = false
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { 
      ...state, 
      postsList: {
        posts: [], 
        error: error, 
        loading: false
      } 
    };
  case RESET_POSTS:// reset postList to initial state
    return { 
      ...state, 
      postsList: {
        posts: [], 
        error:null, 
        loading: false
      } 
    };

  case FETCH_POST:
    return { 
      ...state, 
      activePost:{
        ...state.activePost, 
        loading: true
      }
    };
  case FETCH_POST_SUCCESS:
    return { 
      ...state, 
      activePost: {
        post: action.payload.data, 
        error:null, 
        loading: false
      }}
      ;
  case FETCH_POST_FAILURE:
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { 
      ...state, 
      activePost: {
        post: null, 
        error:error, 
        loading:false
      }
    };
  case RESET_ACTIVE_POST:
    return { 
      ...state, 
      activePost: {
        post: null, 
        error:null, 
        loading: false
      }
    };

  case CREATE_POST:
  	return {
      ...state, 
      newPost: {
        ...state.newPost, 
        loading: true
      }
    }
  case CREATE_POST_SUCCESS:
  	return {
      ...state, 
      newPost: {
        post:action.payload.data, 
        error:null, 
        loading: false
      }
    }
  case CREATE_POST_FAILURE:
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
  	return {
      ...state, 
      newPost: {
        post:null, 
        error:error, 
        loading: false
      }
    }
  case RESET_NEW_POST:
  	return {
      ...state,  
      newPost:{
        post:null, 
        error:null, 
        loading: false
      }
    }
  case DELETE_POST:
   	return {
      ...state, 
      deletedPost: {
        ...state.deletedPost, 
        loading: true
      }
    }
  case DELETE_POST_SUCCESS:
  	return {
      ...state, 
      deletedPost: {
        post:action.payload.data, 
        error:null, 
        loading: false
      }
    }
  case DELETE_POST_FAILURE:
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
  	return {
      ...state, 
      deletedPost: {
        post:null, 
        error:error, 
        loading: false
      }
    }
  case RESET_DELETED_POST:
  	return {
      ...state,  
      deletedPost:{
        post:null, 
        error:null, 
        loading: false
      }
    }

  case VALIDATE_POST_FIELDS:
    return {
      ...state, 
      newPost:{
        ...state.newPost, 
        error: null, 
        loading: true
      }
    }
  case VALIDATE_POST_FIELDS_SUCCESS:
    return {
      ...state, 
      newPost:{
        ...state.newPost, 
        error: null, 
        loading: false
      }
    }
  case VALIDATE_POST_FIELDS_FAILURE:
    let result = action.payload.data;
    if(!result) {
      error = {message: action.payload.message};
    } else {
      error = {
        title: result.title, 
        categories: result.categories, 
        description: result.description};
    }
    return {
      ...state, 
      newPost:{
        ...state.newPost, 
        error: error, 
        loading: false
      }
    }
  case RESET_POST_FIELDS:
    return {
      ...state, 
      newPost:{
        ...state.newPost, 
        error: null, 
        loading: null
      }
    }
  default:
    return state;
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { facebookLogin, fetchPosts, resetDeletedPost, deletePost, deletePostSuccess, deletePostFailure } from '../actions/posts';
import Header from '../components/Header.js';



function mapStateToProps(state) {
  // console.log('Header container state', state);
  return { 
    authenticated: state.user.status === 'authenticated' ? true : null,
    user: state.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	 facebookLogin: (facebookResponse) => {
        dispatch(facebookLogin(facebookResponse));
     },

     logout: () => {
         sessionStorage.removeItem('jwtToken');
         dispatch(logoutUser());
     }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React, { Component } from 'react';
import HomeContainer from '../containers/HomeContainer.js';
import HeaderContainer from '../containers/HeaderContainer.js';


class HomeIndex extends Component {
  render() {
  	console.log('props', this.props);
    return (
      <div>
        <HeaderContainer type="posts_index"/>
      	<HomeContainer />
      </div>
    );
  }
}
export default HomeIndex;

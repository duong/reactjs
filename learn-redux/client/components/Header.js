import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import FacebookLogin from './facebook/facebook';

const responseFacebook = (response, test) => {
  console.log(test,response);
};


class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  };


	render() {
      const callbackFunction = typeof this.props.facebookLogin != 'undefined' ? this.props.facebookLogin : null;
			return (
			 <nav className="navbar navbar-default navbar-static-top">
			      <div id="navbar" className="navbar-collapse collapse">
			       <FacebookLogin
              appId="532016516944140"
              autoLoad={true}
              callback={responseFacebook}
              icon="fa-facebook" 
            />
	      		</div>     
			 </nav>				
			);
	}
}

export default Header
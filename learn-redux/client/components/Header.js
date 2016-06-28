import React from 'react';
import FacebookLogin from './facebook/facebook';

const responseFacebook = (response) => {
	 console.log('facebook response',response);
};


const Header = React.createClass({
	
	// propTypes: {

	// },
	render() {
			return (
				<nav className="navbar navbar-default navbar-static-top">
						<div id="navbar" className="navbar-collapse collapse">
							<FacebookLogin
								appId="532016516944140"
								autoLoad={true}
								callback={responseFacebook}
								icon="fa-facebook" 
								{...this.props}
							/>
						</div>     
				</nav>				
			);
	}
});

export default Header
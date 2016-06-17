import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

const Home = React.createClass({
	componentWillMount() {
    	this.props.fetchPosts();
  	},
	render() {
		return (
			<div className="photo-grid">
				{this.props.postsList.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
			</div>
		);
	}
});

export default Home;
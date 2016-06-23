import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

const Home = React.createClass({
	componentWillMount() {
    	this.props.fetchPosts();
  	},
	render() {
		const { posts, loading, error } = this.props.postsList;
		console.log('loading', loading);
	    if(loading) {
	      return <div className="photo-grid"><h3>Posts Loading...</h3></div>      
	    } else if(error) {
	      return <div className="alert alert-danger">Error: {error.message}</div>
	    }

		return (
			<div className="photo-grid">
				{this.props.postsList.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
			</div>
		);
	}
});

export default Home;
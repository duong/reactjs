import React, { PropTypes } from 'react';
import Photo from './Photo';
const Home = React.createClass({

	propTypes: {
		fetchPosts: PropTypes.func,
		postsList: PropTypes.object
	},
	
	componentWillMount() {
		this.props.fetchPosts();
	},
	render() {
		const { authenticated } = this.props;
		if(!authenticated) {
			return (<div></div>);
		}
		const { posts, loading, error } = this.props.postsList;
		if(loading) {
			return <div className="photo-grid"><h3>Posts Loading...</h3></div>      
		} else if(error) {
			return <div className="alert alert-danger">Error: {error.message}</div>
		}

		return (
			<div className="photo-grid">
				{posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
			</div>
		);
	}
});

export default Home;
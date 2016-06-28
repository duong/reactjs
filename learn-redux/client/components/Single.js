import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({

  propTypes: {
    fetchPosts: React.PropTypes.func,
    postsList: React.PropTypes.object,
    photoId: React.PropTypes.string,
    comments: React.PropTypes.object
  },
  componentWillMount() {
      this.props.fetchPosts();
  },
  render() {
    const { photoId, postsList, comments } = this.props;
    const i = postsList.posts.findIndex((post) => post.code === photoId);
    const post = postsList.posts[i];
    const postComments = comments[photoId] || [];
    
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default Single;
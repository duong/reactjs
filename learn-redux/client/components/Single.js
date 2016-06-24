import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  componentWillMount() {
      this.props.fetchPosts();
  },
  render() {
    console.log('xprops', this.props);
    const { photoId } = this.props;

    const i = this.props.postsList.posts.findIndex((post) => post.code === photoId);
    console.log('postId', i);
    const post = this.props.postsList.posts[i];
    console.log('post', post);

    const postComments = this.props.comments[photoId] || [];
    console.log('postcommnet', postComments);
    

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default Single;

import React, { Component } from 'react';
import SinglePhotoContainer from '../containers/SinglePhotoContainer.js';
class SinglePhoto extends Component {
  render() {
    return (
      <div>
      	<SinglePhotoContainer photoId={this.props.params.id}/>
      </div>
    );
  }
}
export default SinglePhoto;

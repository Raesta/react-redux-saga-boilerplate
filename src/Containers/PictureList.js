import React, { Component } from 'react';
import { PictureCard } from '../Components';

class PictureList extends Component {
  render() {
    const { pictures, error } = this.props;

    return (
      <div className="row d-flex justify-content-between">
        {
          error &&
          <div className="col-12 alert alert-danger" role="alert" style={{ marginTop: 10 }}>
            {error.message}
          </div>
        }
        {
          pictures &&
          pictures.map((picture, index) => (
            <PictureCard key={index} picture={picture} />
          ))
        }
      </div>
    );
  }
}

export default PictureList;

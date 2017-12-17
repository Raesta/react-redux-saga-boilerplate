import React, { Component } from 'react';

class PictureCard extends Component {
  render() {
    const { picture } = this.props;

    return (
      <div className="card" style={{ width: '20rem', margin: 5 }}>
        <img className="card-img-top" src={picture.url} alt={picture.title} style={{ height: '20rem' }} />
        <div className="card-body">
          <p className="card-text">{picture.title}</p>
        </div>
      </div>
    );
  }
}

export default PictureCard;

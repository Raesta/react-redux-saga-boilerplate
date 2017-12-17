import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PictureList, PicturesForm } from './';
import PicturesActions from '../Redux/PictureRedux';

class PicturesScreen extends Component {
  componentDidMount() {
    const { getPictures } = this.props;

    getPictures()
  }

  render() {
    const { pictures } = this.props;

    return (
      <div className="container">
        <PicturesForm />
        <PictureList pictures={pictures.list} error={pictures.getPictures.error} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pictures: state.pictures,
});

const mapDispatchToProps = (dispatch) => ({
  getPictures: () => dispatch(PicturesActions.getPicturesRequest()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(PicturesScreen);

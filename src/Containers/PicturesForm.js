import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PicturesActions from '../Redux/PictureRedux';

class PicturesScreen extends Component {

  handleChange = (name, value) => {
    const { selectSearch, selectPage, selectPerPage } = this.props;

    switch (name) {
      case 'search':
        selectSearch(value);
        break;
      case 'page':
        selectPage(value);
        break;
      case 'perPage':
        selectPerPage(value);
        break;
      default:
        break;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { getPictures } = this.props;

    getPictures();
  };

  render() {
    const { pictures } = this.props;

    return (
      <form className="row" style={{ marginTop: 10 }} onSubmit={this.handleSubmit}>
        <div className="col-lg-4">
          <div className="input-group">
            <span className="input-group-addon">Search</span>
            <input type="text" className="form-control" aria-label="Text input with checkbox" onChange={(event) => this.handleChange('search', event.target.value)} value={pictures.search} />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="input-group">
            <span className="input-group-addon">Page</span>
            <input type="number" className="form-control" aria-label="Text input with radio button" onChange={(event) => this.handleChange('page', event.target.value)} value={pictures.page} />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="input-group">
            <span className="input-group-addon">PerPage</span>
            <input type="number" className="form-control" aria-label="Text input with radio button" onChange={(event) => this.handleChange('perPage', event.target.value)} value={pictures.perPage} />
          </div>
        </div>
        <div className="col-lg-12" style={{ marginTop: 10 }}>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  pictures: state.pictures,
});

const mapDispatchToProps = (dispatch) => ({
  getPictures: () => dispatch(PicturesActions.getPicturesRequest()),
  selectSearch: (search) => dispatch(PicturesActions.selectSearch(search)),
  selectPage: (page) => dispatch(PicturesActions.selectPage(page)),
  selectPerPage: (perPage) => dispatch(PicturesActions.selectPerPage(perPage)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(PicturesScreen);

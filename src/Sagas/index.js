import { takeLatest } from 'redux-saga/effects';
import FlickrApi from '../Services/FlickrApi';

/* ------------- Types ------------- */

import { PictureTypes } from '../Redux/PictureRedux';

/* ------------- Sagas ------------- */
import getPictures from './PictureSagas';
/* ------------- API ------------- */

const flickrApi = FlickrApi.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield [
    takeLatest(PictureTypes.GET_PICTURES_REQUEST, getPictures, flickrApi),
  ];
}

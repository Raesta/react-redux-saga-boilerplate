import { call, put, select } from 'redux-saga/effects';
import PicturesActions from '../Redux/PictureRedux';
import { responseFromApi } from '../Transforms/PictureTransform';

export const getSearch = (state) => state.pictures.search;
export const getPage = (state) => state.pictures.page;
export const getPerPage = (state) => state.pictures.perPage;

export default function* getPictures(api) {
  const search = yield select(getSearch);
  const page = yield select(getPage);
  const perPage = yield select(getPerPage);
  const response = yield call(api.getPictures, { search, page, perPage });

  if (response.ok && response.data.stat === 'ok') {
    yield put(PicturesActions.getPicturesSuccess(responseFromApi(response.data)));
  } else {
    yield put(PicturesActions.getPicturesFailure(response.data));
  }
}

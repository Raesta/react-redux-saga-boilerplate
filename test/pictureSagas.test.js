import expect from 'expect';
import { put, call } from 'redux-saga/effects';
import getPictures from '../src/Sagas/PictureSagas';
import FlickrApi from '../src/Services/FlickrApi';


describe('Test for searchPictureSaga', () => {
  const payload = {
    search: 'kids',
    perPage: 12,
    page: 1,
  };
  const gen = getPictures({ payload });

  it('should call flickrImages API ', () => {
    expect(gen.next(payload).value).toEqual(call(FlickrApi.getPictures, payload));
  });

  it('should dispatch failure effect', () => {
    const error = 'error';
    expect(gen.throw(error).value).toEqual(put({ type: 'GET_PICTURES_FAILURE', error }));
  });
});

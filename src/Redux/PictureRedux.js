import { createReducer, createActions } from 'reduxsauce';
import immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  getPicturesRequest: [],
  getPicturesSuccess: ['data'],
  getPicturesFailure: ['error'],
  selectSearch: ['search'],
  selectPage: ['page'],
  selectPerPage: ['perPage'],
});

export const PictureTypes = Types;
export default Creators;

// the initial state of this reducer
export const INITIAL_STATE = immutable({
  total: null,
  page: 1,
  pages: null,
  perPage: 12,
  search: 'kids',
  list: [],
  getPictures: {
    fetching: false,
    error: null,
  }
});

export const getPicturesRequest = (state) =>
    state.merge({ getPictures: { fetching: true } }, { deep: true });

export const getPicturesSuccess = (state, { data } ) =>
    state.merge({
      ...data,
      getPictures: {
        fetching: false,
      },
    }, { deep: true });

export const getPicturesFailure = (state, error) =>
    state.merge({ getPictures: { fetching: false, ...error } }, { deep: true });

export const selectSearch = (state, { search }) =>
    state.merge({ search }, { deep: true });

export const selectPage = (state, { page }) =>
    state.merge({ page }, { deep: true });

export const selectPerPage = (state, { perPage }) =>
    state.merge({ perPage }, { deep: true });

// map our action types to our reducer functions
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PICTURES_REQUEST]: getPicturesRequest,
  [Types.GET_PICTURES_SUCCESS]: getPicturesSuccess,
  [Types.GET_PICTURES_FAILURE]: getPicturesFailure,
  [Types.SELECT_SEARCH]: selectSearch,
  [Types.SELECT_PAGE]: selectPage,
  [Types.SELECT_PER_PAGE]: selectPerPage,
});

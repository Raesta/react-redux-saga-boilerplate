import { combineReducers } from 'redux';
import { reducer as pictures } from './PictureRedux';

const appReducer = combineReducers({
  pictures,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;

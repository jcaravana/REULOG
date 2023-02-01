import { combineReducers, configureStore } from '@reduxjs/toolkit';
import fuse from './fuse';
import i18n from './i18nSlice';
import user from './userSlice';
import parametros from './parametrosSlice';

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    fuse,
    i18n,
    user,
    parametros,
    ...asyncReducers,
  });
  const store = configureStore({
    reducer: combinedReducer,
  });
  /*
	Reset the redux store when user logged out
	 */
  if (action.type === 'user/userLoggedOut') {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;

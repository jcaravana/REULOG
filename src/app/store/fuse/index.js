import { combineReducers } from '@reduxjs/toolkit';
import dialog from './dialogSlice';
import message from './messageSlice';
import navbar from './navbarSlice';
import navigation from './navigationSlice';
import settings from './settingsSlice';
import modalLoading from './modalLoadingSlice';

const fuseReducers = combineReducers({
  navigation,
  settings,
  navbar,
  message,
  dialog,
  modalLoading,
});

export default fuseReducers;

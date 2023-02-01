import { combineReducers } from '@reduxjs/toolkit';
import navegacao from './navegacaoSlice';

const reducer = combineReducers({
  navegacao,
});

export default reducer;

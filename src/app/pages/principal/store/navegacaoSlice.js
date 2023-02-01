import { createSlice } from '@reduxjs/toolkit';

const navegacaoSlice = createSlice({
  name: 'reu/navegacao',
  initialState: {
    page: 0,
  },
  reducers: {
    resetPage: {
      reducer: (state, action) => {
        state.page = 0;
      },
    },
    setPage: {
      reducer: (state, action) => {
        state.page = action.payload.page;
      },
      prepare: (data) => ({ payload: { page: data } }),
    },
  },
  extraReducers: {},
});

export const { resetPage, setPage } = navegacaoSlice.actions;

export const selectPage = ({ navegacaoApp }) => navegacaoApp.navegacao.page;

export default navegacaoSlice.reducer;

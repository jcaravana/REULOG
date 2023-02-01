import { createSlice } from '@reduxjs/toolkit';

const modalLoadingSlice = createSlice({
  name: 'modalLoading',
  initialState: {
    open: false,
    titulo: '',
    mensagem: '',
  },
  reducers: {
    openModalLoading: (state, action) => {
      state.titulo = action.payload.titulo;
      state.mensagem = action.payload.mensagem;
      state.open = true;
    },
    closeModalLoading: (state, action) => {
      state.titulo = '';
      state.mensagem = '';
      state.open = false;
    },
  },
});

export const { openModalLoading, closeModalLoading } = modalLoadingSlice.actions;

export default modalLoadingSlice.reducer;

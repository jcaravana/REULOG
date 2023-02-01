/* eslint import/no-extraneous-dependencies: off */
import { createSlice } from '@reduxjs/toolkit';
import { produce } from 'immer';
import api from '../auth/services/api';
import jwtService from '../auth/services/jwtService/jwtService';

export const getCategorias = () => {
  return new Promise((dispatch, resolve, reject) => {
    api
      .get('/NuvemShopApi/GetCategorias')
      .then((response) => {
        if (response.data) {
          if (response?.data) {
            dispatch(setCategoriasData(response.data));
          }
          resolve(response.data);
        } else {
          if (response?.data) {
            dispatch(setCategoriasData([]));
          }
          reject(response.data.error);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
jwtService.on('onLogout', () => {
  // pass('Logout com sucesso');
  // setInitialState();
});

jwtService.on('onAutoLogout', (message) => {
  // setInitialState();
});
const initialState = {
  empresa: [],
  categorias: [],
};

const parametrosSlice = createSlice({
  name: 'parametros',
  initialState,
  reducers: {
    setCategoriasData: (state, action) =>
      produce(state, (draft) => {
        draft.categorias = action.payload;
      }),

    setInitialState: (state, action) => {
      produce(state, (draft) => {
        draft.categorias = [];
      });
    },

    extraReducers: {
      /*   [updateUserSettings.fulfilled]: (state, action) => action.payload,
    [updateUserShortcuts.fulfilled]: (state, action) => action.payload,
    [setUser.fulfilled]: (state, action) => action.payload, */
    },
  },
});

export const { setCategoriasData, setInitialState } = parametrosSlice.actions;

export const selectCategorias = ({ parametros }) => parametros.categorias;
export const selectempresa = ({ parametros }) => parametros.empresa;

export default parametrosSlice.reducer;

/* eslint import/no-extraneous-dependencies: off */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from '@lodash';
import history from '@history';
import { setInitialSettings, setDefaultSettings } from 'app/store/fuse/settingsSlice';
import { showMessage } from 'app/store/fuse/messageSlice';
import { produce } from 'immer';
import api from '../auth/services/api';
import jwtService from '../auth/services/jwtService';

export const updateUserSettings = createAsyncThunk(
  'user/updateSettings',
  async (settings, { dispatch, getState }) => {
    const { user } = getState();
    const newUser = _.merge({}, user, { settings });

    dispatch(updateUserData(newUser));

    return newUser;
  }
);

export const logoutUser = () => async (dispatch, getState) => {
  // jwtService.revokeHandle();
  // jwtService.logout();
  dispatch(userLoggedOut());
  dispatch(setInitialSettings());

  history.push({
    pathname: '/',
  });

  // return dispatch(userLoggedOut());
};

export const redirectLogin = () => async (dispatch, getState) => {
  // jwtService.revokeHandle();
  dispatch(setInitialSettings());

  history.push({
    pathname: '/',
  });

  // return dispatch(userLoggedOut());
};
export const updateUserShortcuts = (shortcuts) => async (dispatch, getState) => {
  const { user } = getState();
  const newUser = {
    ...user,
    shortcuts,
  };
  jwtService
    .updateUserShortcut(newUser.shortcuts)
    .then(() => {
      dispatch(
        showMessage({
          message: 'Atalho salvo com sucesso!',
          variant: 'success',
        })
      );
    })
    .catch((error) => {
      dispatch(showMessage({ message: error.message }));
    });

  return dispatch(setUserData(newUser));
};
export const setUserData = (user) => async (dispatch, getState) => {
  /*
        You can redirect the logged-in user to a specific route depending on his role
         */

  /* history.location.state = {
		redirectUrl: user.redirectUrl // for example 'apps/academy'
	}; */

  /*
    Set User Settings
     */
  dispatch(setDefaultSettings(initialState.settings));

  dispatch(setUser(user));
};
export const updateUserData = (user) => async (dispatch, getState) => {
  if (!user.role || user.role.length === 0) {
    // is guest
    return;
  }

  jwtService
    .updateUserData(user)
    .then(() => {
      dispatch(showMessage({ message: 'Alterações Salvas!' }));
    })
    .catch((error) => {
      dispatch(showMessage({ message: error.message }));
    });
};

const initialState = {
  role: [],
  idUsuario: 0,
  nome: null,
  usuario: null,
  email: null,
  ativo: null,
  perfis: [],
  empresa: null,
  imagemPerfil: 'profile.png',
  dataCadastro: null,
  shortcuts: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) =>
      produce(state, (draft) => {
        draft.usuario = action.payload.usuario;
        draft.idUsuario = action.payload.idUsuario;
        draft.nome = action.payload.nome;
        draft.email = action.payload.email;
        draft.perfis = action.payload.perfis;
        draft.role = action.payload.perfis ? action.payload.perfis.map((item) => item.perfil) : [];
        draft.shortcuts = action.payload.shortcuts;
        draft.ativo = action.payload.ativo;
        draft.empresa = action.payload.empresa;
        draft.twoFactorHabilitado = action.payload.twoFactorHabilitado;
        draft.twoFactorAutenticado = action.payload.twoFactorAutenticado;
        draft.dataCadastro = action.payload.dataCadastro;
        draft.imagemPerfil =
          action.payload.imagemPerfil.indexOf(api.defaults.baseURL) > -1
            ? action.payload.imagemPerfil
            : `${api.defaults.baseURL}/Avatars/${action.payload.imagemPerfil}`;
      }),
    userLoggedOut: (state, action) => initialState,
    setSenhaTrocada: (state, action) => {
      state.senhaExpirada = false;
    },
    setImagemPerfil: (state, action) => {
      state.imagemPerfil = `${api.defaults.baseURL}/Avatars/${action.payload.imagemPerfil}`;
    },
    setMeuPerfilUpdate: (state, action) => {
      state.nome = action.payload.nome;
      state.email = action.payload.email;
    },
  },

  extraReducers: {
    /*   [updateUserSettings.fulfilled]: (state, action) => action.payload,
    [updateUserShortcuts.fulfilled]: (state, action) => action.payload,
    [setUser.fulfilled]: (state, action) => action.payload, */
  },
});

export const {
  setUser,
  userLoggedOut,
  setLoading,
  setSenhaTrocada,
  setImagemPerfil,
  setMeuPerfilUpdate,
} = userSlice.actions;

export const selectUser = ({ user }) => user;

export const selectUserShortcuts = ({ user }) => user.shortcuts;

export default userSlice.reducer;

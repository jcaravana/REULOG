import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import history from '@history';
import SimpleCrypto from 'simple-crypto-js';
import jwtServiceConfig from './jwtServiceConfig';
import api from '../api';
/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    api.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          /*   if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
            // if you ever get an unauthorized response, logout the user
            this.emit('onAutoLogout', 'Acesso inválido!');
            this.setSession(null);
          }
          throw err; */
          if (err?.response?.status === 401) {
            // || err?.config || !err?.config?.__isRetryRequest
            // if you ever get an unauthorized response, logout the user
            this.emit('onAutoLogout', 'Token Inválido');
            this.setSession(null);
            history.push({
              pathname: '/',
            });
          } else if (err?.response?.status === 500) {
            history.push({
              pathname: '/pages/errors/error-500',
            });
            this.emit('onAutoLogout', 'Token Inválido');
            this.setSession(null);
          } else if (err?.response?.status === 404) {
            history.push({
              pathname: '/pages/errors/error-404',
            });
          } else if (err?.message === 'Network Error') {
            this.setSession(null);
            history.push({
              pathname: '/pages/errors/error-500',
            });
          } else if (err?.response?.status === undefined) {
            this.emit('onAutoLogout', 'Token expirado!');
            this.setSession(null);
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = () => {
    const access_token = this.getAccessToken();

    if (!access_token) {
      this.emit('onNoAccessToken');

      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit('onAutoLogin', true);
    } else {
      this.setSession(null);
      this.emit('onAutoLogout', 'Sessão expirada!');
    }
  };

  updateUserShortcut = (shortcuts) => {
    return api
      .put('/ShortcutUsuario', {
        shortcuts,
      })
      .then((response) => {
        const a = response;
      })
      .catch((erro) => {
        const b = erro;
      });
  };

  createUser = (data) => {
    return new Promise((resolve, reject) => {
      axios.post(jwtServiceConfig.signUp, data).then((response) => {
        if (response.data.user) {
          this.setSession(response.data.access_token);
          resolve(response.data.user);
          this.emit('onLogin', response.data.user);
        } else {
          reject(response.data.error);
        }
      });
    });
  };

  signInWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
      api
        .post('/autenticacao', {
          usuario: email,
          password,
        })
        .then((response) => {
          if (response.data) {
            this.setSession(response.data.token);
            resolve(response.data);
            this.emit('onLogin', response.data);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  revokeHandle = () => {
    return new Promise((resolve, reject) => {
      api
        .put('/autenticacao/logout')
        .then(async (response) => {
          resolve('');
          this.setSession(null);
        })
        .catch((error) => {
          resolve('');
          this.setSession(null);
          // reject(new Error('Falha ao autenticar com o token.'));
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      api
        .put('/autenticacao', {
          token: this.getAccessToken(),
        })
        .then(async (response) => {
          if (response.data) {
            this.setSession(response.data.token);
            resolve(response.data);
          } else {
            this.logout();
            // reject(new Error('Falha ao autenticar com o token.'));
          }
        })
        .catch((error) => {
          this.logout();
          // reject(new Error('Falha ao autenticar com o token.'));
        });
    });
  };

  updateUserData = (user) => {
    //  return axios.post(jwtServiceConfig.updateUser, {
    //    user,
    //  });
  };

  setSession = (access_token) => {
    if (access_token) {
      const encryptInit = new SimpleCrypto('H@McQeThWmZq4t7w!z%C*F-JaNdRgUjX');
      const encryptedToken = encryptInit.encrypt(access_token);
      window.localStorage.setItem('REU@caw', encryptedToken);
      axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
      api.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
      window.localStorage.removeItem('REU@caw');
      delete axios.defaults.headers.common.Authorization;
      delete api.defaults.headers.common.Authorization;
    }
  };

  logout = async () => {
    this.emit('onLogout', 'Logout');
    await new Promise((r) => setTimeout(r, 2000));
    this.setSession(null);
  };

  isAuthTokenValid = (access_token) => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    /* const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn('token de acesso expirado');
      return false;
    } */

    return true;
  };

  getAccessToken = () => {
    const encryptInit = new SimpleCrypto('H@McQeThWmZq4t7w!z%C*F-JaNdRgUjX');
    let decryptedToken = '';

    try {
      decryptedToken = encryptInit.decrypt(window.localStorage.getItem('REU@caw'));
      return decryptedToken;
    } catch (erro) {
      this.logout();
    }
    return null;
  };
}

const instance = new JwtService();

export default instance;

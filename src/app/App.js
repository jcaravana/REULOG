import '@mock-api';
import rtlPlugin from 'stylis-plugin-rtl';
import { useSelector } from 'react-redux';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { selectCurrentLanguageDirection } from 'app/store/i18nSlice';
import settingsConfig from 'app/configs/settingsConfig';
import { SnackbarProvider } from 'notistack';
import FuseAuthorization from '@fuse/core/FuseAuthorization';
import ModalLoading from 'app/theme-layouts/shared-components/ModalLoading';
import FuseLayout from '@fuse/core/FuseLayout';
import BrowserRouter from '@fuse/core/BrowserRouter';
import FuseTheme from '@fuse/core/FuseTheme';
import themeLayouts from 'app/theme-layouts/themeLayouts';
import { selectUser } from './store/userSlice';
import { selectMainTheme } from './store/fuse/settingsSlice';
import withAppProviders from './withAppProviders';
import { AuthProvider } from './auth/AuthContext';

const emotionCacheOptions = {
  rtl: {
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
    insertionPoint: document.getElementById('emotion-insertion-point'),
  },
  ltr: {
    key: 'muiltr',
    stylisPlugins: [],
    insertionPoint: document.getElementById('emotion-insertion-point'),
  },
};
function App() {
  const user = useSelector(selectUser);
  const langDirection = useSelector(selectCurrentLanguageDirection);
  const mainTheme = useSelector(selectMainTheme);

  return (
    <CacheProvider value={createCache(emotionCacheOptions[langDirection])}>
      <FuseTheme theme={mainTheme} direction={langDirection}>
        <AuthProvider>
          <BrowserRouter>
            <FuseAuthorization
              userRole={user.role}
              loginRedirectUrl={settingsConfig.loginRedirectUrl}
            >
              <SnackbarProvider
                maxSnack={5}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                classes={{
                  containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',
                }}
              >
                <FuseLayout layouts={themeLayouts} />
                <ModalLoading />
              </SnackbarProvider>
            </FuseAuthorization>
          </BrowserRouter>
        </AuthProvider>
      </FuseTheme>
    </CacheProvider>
  );
}

export default withAppProviders(App)();

import themesConfig from 'app/configs/themesConfig';

const settingsConfig = {
  layout: {
    style: 'layout2', // layout1 layout2 layout3
    config: {}, // checkout default layout configs at app/theme-layouts for example  app/theme-layouts/layout1/Layout1Config.js
  },
  customScrollbars: false,
  direction: 'ltr', // rtl, ltr
  theme: {
    main: themesConfig.metroLight,
    navbar: themesConfig.defaultDark,
    toolbar: themesConfig.dark4,
    footer: themesConfig.defaultDark,
  },
  /*
   To make whole app auth protected by default set defaultAuth:['admin','staff','user']
   To make whole app accessible without authorization by default set defaultAuth: null
   *** The individual route configs which has auth option won't be overridden.
   */
  defaultAuth: [],
  /*
    Default redirect url for the logged-in user,
   */
  loginRedirectUrl: '/',
};

export default settingsConfig;

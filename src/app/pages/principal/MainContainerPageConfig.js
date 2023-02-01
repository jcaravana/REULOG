import MainContainerPage from './MainContainerPage';

const MainContainerPageConfig = {
  settings: {
    layout: {
      config: {
        mode: 'fullwidth',
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
          /* style: 'static',
          position: 'below', */
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  routes: [
    {
      path: '/',
      element: <MainContainerPage />,
    },
  ],
};

export default MainContainerPageConfig;

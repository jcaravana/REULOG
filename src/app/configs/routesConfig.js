import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import FuseUtils from '../../@fuse/utils';
import MainContainerConfig from '../pages/principal/MainContainerPageConfig';
import settingsConfig from './settingsConfig';

const routeConfigs = [MainContainerConfig];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="" />,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
];

export default routes;

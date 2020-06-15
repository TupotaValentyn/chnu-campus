import { RouteProps } from 'react-router-dom';
import Overview from '../pages/Overview/Overview';
import Map from '../pages/Map/Map';

const campusRoutes: RouteProps[] = [
  {
    exact: true,
    path: '/',
    component: Overview
  },
  {
    exact: true,
    path: '/map',
    component: Map
  }
];


export default campusRoutes;

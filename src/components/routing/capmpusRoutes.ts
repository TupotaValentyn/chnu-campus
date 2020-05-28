import { RouteProps } from 'react-router-dom';
import Overview from "../pages/Overview/Overview";

const campusRoutes: RouteProps[] = [
  {
    exact: true,
    path: '/',
    component: Overview
  }
];


export default campusRoutes;

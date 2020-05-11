import { RouteProps } from 'react-router-dom';
import ROUTES from "./routes";
import CampusItem from "../common/CampusItem/CampusItem";
import data, { RouteData } from '../../data/data';

export type CampusItemsRoutesWithProps = {
  props: RouteData
} & RouteProps;

const campusItemsRoutes: RouteProps[] = ROUTES.map((routePath) => ({
  path: routePath,
  exact: true,
  component: CampusItem
}));

const campusItemsRoutesWithProps: any = campusItemsRoutes.map((route) => {
  const match = data.find((routeProps) => routeProps.path === route.path);

  if (match) {
    return {
      ...route,
      props: {...match}
    }
  }

  return undefined;
}).filter((e) => e);

export { campusItemsRoutes, campusItemsRoutesWithProps };

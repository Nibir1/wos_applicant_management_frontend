import type { RouteObject } from 'react-router-dom';

import loginRoute from './login/route';
import dashboardRoute from './dashboard/route';

const applicationRoutes:RouteObject[] = [
  loginRoute,
  dashboardRoute,
];
export default applicationRoutes;
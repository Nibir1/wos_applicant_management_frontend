import type { RouteObject } from 'react-router-dom';

import DashboardLayout from './layout';

import HomePage from './Home';
import userRoute from './user/route';
import registrationRoute from './registration/route';
import formFillRoute from './form-fill/route';
import chatRoute from './chat/route';

const dashboardRoute:RouteObject = {
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    { index: true, element: <HomePage /> },
    userRoute,
    registrationRoute,
    formFillRoute,
    chatRoute,
  ]
};
export default dashboardRoute;
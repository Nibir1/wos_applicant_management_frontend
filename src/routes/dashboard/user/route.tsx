import type { RouteObject } from 'react-router-dom';

import UserPage from './page';

const userRoute:RouteObject = {
  path: '/dashboard/user',
  element: <UserPage />,
};
export default userRoute;
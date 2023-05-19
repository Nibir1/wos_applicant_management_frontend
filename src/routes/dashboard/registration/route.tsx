import type { RouteObject } from 'react-router-dom';

import RegistrationPage from './page';

const registrationRoute:RouteObject = {
  path: '/dashboard/registration',
  element: <RegistrationPage />,
};
export default registrationRoute;
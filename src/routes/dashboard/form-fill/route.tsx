import type { RouteObject } from 'react-router-dom';

import FormFillPage from './page';

const formFillRoute:RouteObject = {
  path: '/dashboard/form-fill',
  element: <FormFillPage />,
};
export default formFillRoute;
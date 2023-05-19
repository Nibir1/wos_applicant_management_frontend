import type { RouteObject } from 'react-router-dom';
 
import LoginPage from './page';
import loginFormAction from './action';

const loginRoute:RouteObject = {
  path: '/login',
  element: <LoginPage />,
  action: loginFormAction,
};
export default loginRoute;

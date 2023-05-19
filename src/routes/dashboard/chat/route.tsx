import type { RouteObject } from 'react-router-dom';

import ChatPage from './page';

const chatRoute:RouteObject = {
  path: '/dashboard/chat',
  element: <ChatPage />,
};
export default chatRoute;
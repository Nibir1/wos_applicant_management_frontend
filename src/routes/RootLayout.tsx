import { Outlet } from 'react-router-dom';

import { SessionProvider } from '@/session';
import Background from '@components/Background';

export default function RootLayout() {
  return <SessionProvider>
    <Background />

    <Outlet />
  </SessionProvider>
}

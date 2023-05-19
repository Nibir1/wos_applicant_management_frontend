import { useSession } from '@/session';

import type { MouseEventHandler } from 'react';

export default function LogoutLink() {
  const session = useSession();

  const handleClick:MouseEventHandler = (evt) => {
    evt.preventDefault();

    session?.destroy();
  };

  return <a href='#' className='link-logout' onClick={handleClick}>Log Out</a>
}
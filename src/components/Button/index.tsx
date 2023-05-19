import { Button as AriaButton } from 'react-aria-components';

import type { ReactNode } from 'react';
import type { PressHandler } from '@/types/interaction';

export interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;

  onPress?: PressHandler;

  children: ReactNode;
}

import './index.scss'
export default function Button({
  className = '',
  type = 'button',
  disabled = false,

  onPress,

  children,
}: ButtonProps) {
  return <AriaButton 
    className={[ 'input-button', className ].join(' ')}
    type={type}
    isDisabled={disabled}
    onPress={onPress}>
      { children }
  </AriaButton>
}
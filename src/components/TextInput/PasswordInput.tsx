import TextInput from '.';

import type { TextInputProps } from '.';

export type PasswordInputProps = Omit<TextInputProps,
  'icon' |
  'type' |
  'inputMode' |
  'placeholder'
>;

export default function PasswordInput(props:PasswordInputProps) {
  return <TextInput {...props} 
    type='password'
    icon='key'
    inputMode='text'
    placeholder='un1qu3P455w0rd'
    />
}

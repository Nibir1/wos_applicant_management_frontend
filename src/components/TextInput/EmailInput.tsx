import TextInput from '.';

import type { TextInputProps } from '.';

export type EmailInputProps = Omit<TextInputProps,
  'icon' |
  'type' |
  'inputMode' |
  'placeholder'
>;

export default function EmailInput(props:EmailInputProps) {
  return <TextInput {...props} 
    type='email'
    icon='email'
    inputMode='email'
    placeholder='john.doe@example.com'
    />
}

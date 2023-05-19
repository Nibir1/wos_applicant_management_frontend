import { TextField, Label, Input, Text } from 'react-aria-components';
import Icon from '@components/Icon';

import type { TextFieldProps } from 'react-aria-components';
import type { EIcon } from '@components/Icon';

export interface TextInputProps extends TextFieldProps {
  label: string;
  hideLabel: boolean;
  icon?: EIcon;
  placeholder?: string;
  errorMessage?: string;
}

import './index.scss';
export default function TextInput({
  label,
  hideLabel = false,
  icon,
  placeholder,
  errorMessage,
  ...fieldProps
}: TextInputProps) {
  return <TextField {...fieldProps} className='input-text'>

    <Label className={hideLabel ? 'sr-only' : ''}>{ label }</Label>
    
    <span className='input-text-field'>
      
      { icon && (<span className='input-text-icon'>
        <Icon name={icon} /> 
      </span>)}

      <Input placeholder={placeholder} required={fieldProps.isRequired} />
    </span>

    { errorMessage && <Text className='text-error input-text-error' slot="errorMessage">{ errorMessage }</Text> }

  </TextField>
}
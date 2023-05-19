import { useEffect } from 'react';
import { Link, Form } from 'react-router-dom';
import { checkError, useActionData } from '@/utils';

import EmailInput from '@components/TextInput/EmailInput';
import PasswordInput from '@components/TextInput/PasswordInput';
import Button from '@components/Button';

import type { SessionUser, OptSessionUser } from '@/session';

/**
 * Defines the typescript form data to be used by `./action.ts` to
 * parse the sent form.
 */
export type LoginFormData = {
  accountEmail: string;
  accountPassword: string;
};

/**
 * Defines the typescript object structure for form validation errors.
 */
export type LoginFormResponse = {
  user: OptSessionUser;

  errors: {
    badCredentials?: boolean;
    email?: boolean;
    password?: boolean;
  }
};

import './Body.scss';
export default function LoginBody({
  onSuccess,
}: {
  onSuccess: (usr:SessionUser) => void;
}) {
  const response = useActionData<LoginFormResponse>();

  // See if login was successful
  useEffect(() => {
    if(response && response.user)
      onSuccess(response.user);
  }, [ onSuccess, response ]);
  
  return <section id='page-login-body' className='vert-center'>
    <div className='align-center'>
      <h1>Sign-In to WOS</h1>

      { response && response.errors.badCredentials && <span className='text-error'>
        Invalid email address, or password. Please check the information entered and try again.
      </span> }

      <Form method='post' action='/login' className='align-center'>
        <EmailInput id='loginEmail'
          name='accountEmail'
          label='Account Email Address'
          hideLabel
          errorMessage={checkError('email', 'Invalid email address', response?.errors)}
          autoComplete='email'
          autoFocus
          isRequired
          />
        
        <PasswordInput id='loginPassword'
          name='accountPassword'
          label='Account password'
          hideLabel
          errorMessage={checkError('password', 'Invalid password format', response?.errors)}
          autoComplete='current-password'
          isRequired
          />
        
        <Button type='submit'>Sign In</Button>
      </Form>

      <Link to='/forgot-password'>Forgot your password?</Link>
    </div>
  </section>
}

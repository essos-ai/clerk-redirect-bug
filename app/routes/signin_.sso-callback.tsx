import { AuthenticateWithRedirectCallback } from '@clerk/react-router';
import {
  DEFAULT_SIGN_IN_REDIRECT_PATH,
  DEFAULT_SIGN_UP_REDIRECT_PATH,
} from '~/services/AuthService';
import type { Route } from './+types/signin_.sso-callback';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Company Name' }];
}

export default function SigninSsoCallback() {
  return (
    <AuthenticateWithRedirectCallback
      signInFallbackRedirectUrl={DEFAULT_SIGN_IN_REDIRECT_PATH}
      signUpFallbackRedirectUrl={DEFAULT_SIGN_UP_REDIRECT_PATH}
    />
  );
}

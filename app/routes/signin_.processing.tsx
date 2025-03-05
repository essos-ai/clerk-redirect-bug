import { useAuth } from '@clerk/react-router';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ErrorBlock from '~/components/ErrorBlock';
import type { Route } from './+types/signin_.processing';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Company Name' }];
}

export default function SigninProcessing() {
  const { isLoaded, getToken, signOut } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    (async () => {
      if (!isLoaded) {
        return;
      }
      try {
        const clerkJwt = await getToken();
        if (!clerkJwt) {
          throw new Error('Unable to process signin due to missing Clerk token.');
        }
      } catch (e) {
        setError(new Error(`Server was unable to process signin: ${(e as Error).message}`));
      }
    })();
  }, [isLoaded]);

  const signOutHandler = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <>
      <Typography variant="h1" className="text-center">
        Signin callback page
      </Typography>
      {error && (
        <>
          <ErrorBlock details={error.message}>
            <Button variant="contained" onClick={signOutHandler}>
              Home
            </Button>
          </ErrorBlock>
        </>
      )}
    </>
  );
}

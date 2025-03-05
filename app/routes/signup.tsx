import { SignUp } from '@clerk/react-router';
import { Box } from '@mui/material';
import type { Route } from './+types/signup';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Sign up — Company Name' }];
}

export default function Signup() {
  return (
    <Box className="flex justify-center items-center" sx={{ minHeight: 'calc(100vh - 140px) ' }}>
      <SignUp />
    </Box>
  );
}

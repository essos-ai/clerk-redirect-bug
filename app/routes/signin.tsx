import { SignIn } from '@clerk/react-router';
import { Box } from '@mui/material';

export default function Signin() {
  return (
    <Box className="flex justify-center items-center" sx={{ minHeight: 'calc(100vh - 140px) ' }}>
      <SignIn />
    </Box>
  );
}

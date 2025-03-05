import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { Route } from './+types/_index';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Company Name' }];
}

export default function Index() {
  return (
    <>
      <Box
        className="flex flex-col justify-center items-center"
        sx={{ minHeight: 'calc(100vh - 140px)' }}
      >
        <Box className="text-center mb-6">
          <Typography variant="h1">Homepage</Typography>
        </Box>
      </Box>
    </>
  );
}

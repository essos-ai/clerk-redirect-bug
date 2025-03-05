import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  colorSchemes: {
    dark: false,
  },
  palette: {
    mode: 'light',
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
});

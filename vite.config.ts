import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [reactRouter(), svgr(), tailwindcss(), tsconfigPaths()],
  server: {
    allowedHosts: [],
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5373, // you can replace this port with any port
  },
  ssr: {
    noExternal: ['@apollo/client', '@mui/icons-material'],
  },
});

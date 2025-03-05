import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/react-router';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Box, Button, CssBaseline, ThemeProvider } from '@mui/material';
import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from 'react-router';
import type { Route } from './+types/root';
import stylesheet from './app.css?url';
import ErrorBlock from './components/ErrorBlock';
import {
  DEFAULT_SIGN_IN_REDIRECT_PATH,
  DEFAULT_SIGN_OUT_PATH,
  DEFAULT_SIGN_UP_REDIRECT_PATH,
} from './services/AuthService';
import { theme } from './theme';

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
  },
  { rel: 'stylesheet', href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="emotion-insertion-point" content="" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme={theme} defaultMode="light" noSsr>
          <CssBaseline />
          {children}
          <ScrollRestoration />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      signInFallbackRedirectUrl={DEFAULT_SIGN_IN_REDIRECT_PATH}
      signUpFallbackRedirectUrl={DEFAULT_SIGN_UP_REDIRECT_PATH}
      afterSignOutUrl={DEFAULT_SIGN_OUT_PATH}
    >
      <Box className="min-h-screen">
        <header className="p-4 flex justify-between items-center">
          <Link to="/">
            <LogoDevIcon />
          </Link>

          <Box>
            <SignedOut>
              {location.pathname !== '/signin' && (
                <SignInButton
                  mode="modal"
                  forceRedirectUrl={DEFAULT_SIGN_IN_REDIRECT_PATH}
                  signUpForceRedirectUrl={DEFAULT_SIGN_UP_REDIRECT_PATH}
                >
                  <Button>
                    <AccountCircleOutlinedIcon />
                  </Button>
                </SignInButton>
              )}
            </SignedOut>
            <SignedIn>
              <Box className="flex items-center gap-2">
                <UserButton />
              </Box>
            </SignedIn>
          </Box>
        </header>
        <main>
          <Outlet />
        </main>
      </Box>
    </ClerkProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Something went wrong.';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <Box className="min-h-screen bg-gray-100">
      <header className="p-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo-light.webp" width="100" />
        </Link>
      </header>
      <main>
        <ErrorBlock {...{ message, details, stack }} />
      </main>
    </Box>
  );
}

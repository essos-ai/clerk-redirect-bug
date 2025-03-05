import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Container from '@mui/material/Container';
import type { PropsWithChildren } from 'react';

type ErrorBlockProps = PropsWithChildren & {
  message?: string;
  details: string;
  stack?: string;
};

export default function ErrorBlock({
  message = 'Something went wrong.',
  details,
  stack,
}: ErrorBlockProps) {
  return (
    <Container className="pt-24">
      <Typography variant="h2" gutterBottom>
        {message}
      </Typography>
      <Typography sx={{ mb: 4 }}>{details}</Typography>
      {stack && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">View details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <pre className="w-full overflow-x-auto text-sm">
              <code>{stack}</code>
            </pre>
          </AccordionDetails>
        </Accordion>
      )}
    </Container>
  );
}

import Link from 'next/link';
import { Box, Container } from '@mui/material';
import { Stack } from '@mui/material';
import { Fade } from '@mui/material';
import useSimpleRouteTransition from '@/hooks/useSimpleRouteTransition';

export default function Layout({ children }) {
  const { transitionEnd, displayChildren } = useSimpleRouteTransition({
    delay: 1000,
    children,
  });

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          flexFlow: 'column nowrap',
        }}
      >
        <Box mt={10} mb={0}>
          <h1>Page transitions with Next.js</h1>
        </Box>
      </Box>
      <Stack direction={'row'} spacing={2}>
        <Link href="/">index</Link>
        <Link href="/blog">blog</Link>
        <Link href="/links">Links</Link>
      </Stack>
      <Box sx={{ bgcolor: 'green', p: 2 }}>
        <Fade in={transitionEnd} timeout={1000}>
          <div>{displayChildren}</div>
        </Fade>
      </Box>
      <Box sx={{ bgcolor: 'darkblue', p: 2 }}>Footer</Box>
    </Container>
  );
}

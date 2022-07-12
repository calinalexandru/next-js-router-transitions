import Link from 'next/link';
import React, { useState, useEffect, useMemo } from 'react';
import { Box, Container } from '@mui/material';
import useRouteTransition from '@/hooks/useRouteTransition';
import useRouterChange from '@/hooks/useRouterChange';
import { Stack } from '@mui/material';
import { Fade } from '@mui/material';

export default function Layout({ children }) {
  const [displayChildren, setDisplayChildren] = useState([]);
  const idle = useRouterChange();
  const transitionEnd = useRouteTransition({ delay: 1000, idle });

  useEffect(() => {
    if (transitionEnd) setDisplayChildren(children);
  }, [setDisplayChildren, transitionEnd, children]);

  const pageBody = useMemo(
    () => (
      <Fade in={transitionEnd} timeout={1000}>
        <div>{displayChildren}</div>
      </Fade>
    ),
    [transitionEnd, displayChildren]
  );

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
      <Box sx={{ bgcolor: 'green', p: 2 }}>{pageBody}</Box>
      <Box sx={{ bgcolor: 'darkblue', p: 2 }}>Footer</Box>
    </Container>
  );
}

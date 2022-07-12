import Link from 'next/link';
import React, { useState, useEffect, useMemo } from 'react';
import { Box, Container, Grow } from '@mui/material';
import useRouteTransition from '@/hooks/useRouteTransition';
import useRouterChange from '@/hooks/useRouterChange';
import { Stack } from '@mui/material';

export default function Layout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const idle = useRouterChange();
  const transitionEnd = useRouteTransition({ delay: 1000, idle });

  useEffect(() => {
    if (transitionEnd) setDisplayChildren(children);
  }, [transitionEnd]);

  const out = useMemo(
    () => (
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
        <Stack spacing={2}>
          <Link href="/">index</Link>
          <Link href="/blog">blog</Link>
          <Link href="/links">Links</Link>
        </Stack>
        <Grow in={transitionEnd} timeout={1000}>
          <div>{children}</div>
        </Grow>
        <Box>Footer</Box>
      </Container>
    ),
    [idle, transitionEnd, displayChildren]
  );

  return out;
}

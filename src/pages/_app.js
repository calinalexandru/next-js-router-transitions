import React from 'react';

const Layout = ({ children }) => {
  console.log('Layout', children);
  const router = useRouter();
  const { pathname } = router;
  const idle = useRouterChange();
  const buffering = useRouteTransition({ delay: 1000, idle });
  return (
    <Container maxWidth="lg">
      <Flex
        sx={{
          flexFlow: 'column nowrap',
        }}
      >
        <Box mt={10} mb={0}>
          <h1>Page transitions with Next.js</h1>
        </Box>
      </Flex>
      <Box>Navigation</Box>
      <Grow in={buffering} timeout={1000}>
        <div>{children}</div>
      </Grow>
      <Box>Footer</Box>
    </Container>
  );
};

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

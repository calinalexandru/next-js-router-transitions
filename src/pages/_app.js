import Layout from '@/components/layout';

export default function App({ Component, pageProps }) {
  console.log('App', Component, pageProps);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

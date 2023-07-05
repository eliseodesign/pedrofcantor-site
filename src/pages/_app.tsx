// pages/_app.js

import { AppProps } from 'next/app';
import Layout from '@/shared/components/BlogLayout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;

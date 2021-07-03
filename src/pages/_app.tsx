import React from 'react';

import '~/config/firebaseClient';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { theme } from '~/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rodrigues Costa</title>
      </Head>

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;

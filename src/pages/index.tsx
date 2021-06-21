import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

import { Header } from '~/components/Header';

const PageComponent: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />

      <Flex>
        <Text>Home</Text>
      </Flex>
    </Flex>
  );
};

export default PageComponent;

import React from 'react';

import { Stack, Flex, Text, Avatar } from '@chakra-ui/react';
import { NextPage } from 'next';

const PageComponent: NextPage = () => {
  return (
    <Stack mt="8" align="center">
      <Avatar
        size="2xl"
        name="Rodrigues Costa"
        src="https://bit.ly/kent-c-dodds"
      />

      <Text fontWeight="bold" fontSize="4xl">
        Rodrigues Costa
      </Text>

      <Flex>
        <Text>Home</Text>
      </Flex>
    </Stack>
  );
};

export default PageComponent;

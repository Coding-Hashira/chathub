import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {};

const EmptyState = (props: Props) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bg="gray.100"
      className="px-4 py-10 sm:px-6 lg:px-8"
      h="100%"
    >
      <Flex textAlign="center" flexDir="column" justifyContent="center">
        <Heading
          mt="0.5rem"
          fontWeight="semibold"
          fontSize="xl"
          textColor="gray.900"
        >
          Select a chat or start a new conversation
        </Heading>
      </Flex>
    </Flex>
  );
};

export default EmptyState;

import AuthForm from "@/components/AuthForm";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Flex
      minH="100vh"
      flexDir="column"
      justify="center"
      bg="gray.100"
      pb="2rem"
      pt="0"
      className="sm:px-6 lg:px-8"
    >
      <Box className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          height={48}
          width={48}
          src="/logo.svg"
          className="mx-auto w-20"
        />
        <Heading
          mt="6"
          textAlign="center"
          fontSize="1.5rem"
          lineHeight="2rem"
          fontWeight="semibold"
          letterSpacing="tight"
          textColor="gray.900"
        >
          Sign in to your account
        </Heading>
      </Box>
      <AuthForm />
    </Flex>
  );
}

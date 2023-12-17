"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import Avatar from "./Avatar";
import LoadingModal from "./LoadingModal";

interface UserBoxProps {
  user: User;
}

const UserBox: React.FC<UserBoxProps> = ({ user }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);
    axios
      .post(`/api/conversations`, {
        userId: user.id,
      })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user, router]);

  return (
    <>
      {isLoading && <LoadingModal />}
      <Flex
        alignItems="center"
        p="0.75rem"
        w="full"
        position="relative"
        className="bg-white hover:bg-neutral-100 space-x-3"
        rounded="lg"
        cursor="pointer"
        transition="all 0.2s"
        onClick={handleClick}
      >
        <Avatar user={user} />
        <Box minW="0" flex="1">
          <Box _focus={{ outline: "none" }}>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              mb="0.25rem"
            >
              <Text fontWeight="medium" textColor="gray.900" fontSize="sm">
                {user.name}
              </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default UserBox;

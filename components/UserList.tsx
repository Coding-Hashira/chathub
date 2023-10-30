"use client";

import { Box, Flex } from "@chakra-ui/react";
import { User } from "@prisma/client";
import React from "react";
import UserBox from "./UserBox";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <aside className="inset-y-0 fixed pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0">
      <Box px="1.25rem">
        <Flex flexDir="column">
          <Box
            py="1rem"
            fontWeight="bold"
            fontSize="2xl"
            className="text-neutral-800"
          >
            People
          </Box>
        </Flex>
        {users.map((user) => (
          <UserBox key={user.id} user={user} />
        ))}
      </Box>
    </aside>
  );
};

export default UserList;

"use client";

import React from "react";
import { User } from "@prisma/client";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import useActiveList from "@/hooks/useActiveList";

interface Props {
  user?: User;
}

const Avatar: React.FC<Props> = ({ user }) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;

  return (
    <Box pos="relative" display="flex">
      <Box
        display="inline-block"
        position="relative"
        rounded="full"
        overflow="hidden"
        className="w-9 h-9 md:h-11 md:w-11"
      >
        <Image alt="avatar" src={user?.image || "/placeholder.jpg"} fill />
      </Box>
      {isActive ? (
        <span className="absolute rounded-full bg-green-500 block ring-2 ring-white top-0 right-0 w-2 h-2 md:w-3 md:h-3" />
      ) : null}
    </Box>
  );
};

export default Avatar;

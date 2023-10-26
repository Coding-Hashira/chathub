"use client";

import useConversation from "@/hooks/useConversation";
import useRoutes from "@/hooks/useRoutes";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }
  return (
    <Flex
      alignItems="center"
      className="lg:hidden border-t-[1px] fixed"
      justifyContent="space-between"
      w="full"
      bottom="0"
      zIndex="40"
      bg="white"
    >
      {routes.map((item) => (
        <MobileItem
          key={item.label}
          href={item.pathname}
          icon={item.icon}
          active={item.active}
        />
      ))}
    </Flex>
  );
};

export default MobileFooter;

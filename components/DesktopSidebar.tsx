"use client";

import useRoutes from "@/hooks/useRoutes";
import { Box, Flex, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";
import DesktopItem from "./DesktopItem";
import { HiLogout } from "react-icons/hi";
import { signOut } from "next-auth/react";

const DesktopSidebar = () => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:flex lg:flex-col lg:pb-4 justify-between">
      <Flex
        flexDir="column"
        justifyContent="space-between"
        as="nav"
        h="full"
        mt="1rem"
      >
        <UnorderedList
          role="list"
          display="flex"
          flexDirection="column"
          listStyleType="none"
          alignItems="center"
          rowGap="1.25rem"
        >
          {routes.map((item) => (
            <DesktopItem
              key={item.label}
              href={item.pathname}
              label={item.label}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </UnorderedList>
        <UnorderedList
          role="list"
          display="flex"
          flexDirection="column"
          listStyleType="none"
          alignItems="center"
          rowGap="0.25rem"
        >
          <DesktopItem
            key={"Logout"}
            href="#"
            label={"Logout"}
            icon={HiLogout}
            onClick={() => signOut()}
          />
        </UnorderedList>
      </Flex>
    </Box>
  );
};

export default DesktopSidebar;

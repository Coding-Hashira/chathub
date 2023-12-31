"use client";

import useRoutes from "@/hooks/useRoutes";
import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { useState } from "react";
import DesktopItem from "./DesktopItem";
import { HiLogout } from "react-icons/hi";
import { signOut } from "next-auth/react";
import { User } from "@prisma/client";
import Avatar from "./Avatar";
import Link from "next/link";
import clsx from "clsx";
import SettingsModal from "./SettingsModal";

interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  console.log(currentUser);

  return (
    <>
      <SettingsModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        currentUser={currentUser}
      />
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
            {routes.map((item: any) => (
              <DesktopItem
                key={item.label}
                href={item.pathname}
                label={item.label}
                icon={item.icon}
                active={item.active}
              />
            ))}
          </UnorderedList>
        </Flex>
        <Flex
          as="nav"
          flexDir="column"
          justifyContent="space-between"
          alignItems="center"
          mb="1rem"
          rowGap="1.25rem"
        >
          <UnorderedList
            role="list"
            display="flex"
            flexDirection="column"
            listStyleType="none"
            alignItems="center"
            marginInlineStart="0"
          >
            <ListItem onClick={() => signOut()}>
              <Link
                href={"#"}
                className={clsx(
                  `group flex gap-x-3 rounded-md p-3 text-sm leading-6 text-gray-700 hover:text-black transition-all duration-200 font-medium hover:bg-gray-100`
                )}
              >
                <HiLogout className="h-6 w-6 shrink-0" />
                <Text className="sr-only">Logout</Text>
              </Link>
            </ListItem>
          </UnorderedList>
          <Box
            onClick={() => setIsOpen(true)}
            cursor="pointer"
            transition="all 200ms ease"
            _hover={{ opacity: "75%" }}
          >
            <Avatar user={currentUser} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default DesktopSidebar;

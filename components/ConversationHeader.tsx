"use client";

import useOtherUser from "@/hooks/useOtherUser";
import { useMemo, useState } from "react";
import { Conversation, User } from "@prisma/client";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import Avatar from "./Avatar";
import ProfileDrawer from "./ProfileDrawer";
import AvatarGroup from "./AvatarGroup";

interface ConversationHeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const ConversationHeader: React.FC<ConversationHeaderProps> = ({
  conversation,
}) => {
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const statusText = useMemo(() => {
    if (conversation?.isGroup) {
      return `${conversation.users.length} members`;
    }

    return "Active";
  }, [conversation]);

  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div className="bg-white w-full flex border-b sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
        <Flex gap="0.75rem" alignItems="center">
          <Link
            href="/conversations"
            className="lg:hidden block cursor-pointer text-sky-500 transition hover:text-sky-600"
          >
            <HiChevronLeft size={32} />
          </Link>
          {conversation?.isGroup ? (
            <AvatarGroup users={conversation.users} />
          ) : (
            <Avatar user={otherUser} />
          )}
          <Flex flexDirection="column">
            <Text>{conversation.name || otherUser?.name}</Text>
            <Text fontSize="sm" fontWeight="light" className="text-neutral-500">
              {statusText}
            </Text>
          </Flex>
        </Flex>

        <HiEllipsisHorizontal
          className="text-sky-500 cursor-pointer hover:text-sky-600 transition"
          size={32}
          onClick={() => {
            setDrawerOpen(true);
          }}
        />
      </div>
    </>
  );
};

export default ConversationHeader;

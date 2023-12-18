"use client";

import React, { useCallback, useMemo } from "react";
import format from "date-fns/format";
import { useRouter } from "next/navigation";
import { Conversation, User, Message } from "@prisma/client";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { FullConversationType } from "@/types";
import useOtherUser from "@/hooks/useOtherUser";
import Avatar from "./Avatar";
import { Box, Flex, Text } from "@chakra-ui/react";
import AvatarGroup from "./AvatarGroup";

interface ConnversationBoxProps {
  conversation: FullConversationType;
  selected?: boolean;
}

const ConnversationBox: React.FC<ConnversationBoxProps> = ({
  conversation,
  selected,
}) => {
  const otherUser = useOtherUser(conversation);
  const session = useSession();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/conversations/${conversation.id}`);
  }, [router, conversation.id]);

  const lastMessage = useMemo(() => {
    const messages = conversation.messages || [];

    return messages[messages.length - 1];
  }, [conversation.messages]);

  const userEmail = useMemo(() => {
    return session?.data?.user?.email;
  }, [session?.data?.user?.email]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) return false;

    const seenArray = lastMessage.seen || [];

    if (!userEmail) return false;

    return seenArray.filter((user) => user.email === userEmail).length !== 0;
  }, [lastMessage, userEmail]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return "Sent an image";
    }

    if (lastMessage?.body) {
      return lastMessage.body;
    }

    return "Started a conversation";
  }, [lastMessage]);

  return (
    <div
      className={clsx(
        `w-full, flex items-center relative space-x-3 overflow-auto hover:bg-neutral-100 rounded-lg transition cursor-pointer p-3`,
        selected ? "bg-neutral-100" : "bg-white"
      )}
      onClick={handleClick}
    >
      {conversation?.isGroup ? (
        <AvatarGroup users={conversation.users} />
      ) : (
        <Avatar user={otherUser} />
      )}
      <Box min-w="0" overflow="auto" flex="1">
        <Box _focus={{ outline: "none" }}>
          <Flex justifyContent="space-between" alignItems="center" mb="0.25rem">
            <Text className="text-md font-medium text-gray-900">
              {conversation?.name || otherUser?.name}
            </Text>
            {lastMessage?.createdAt && (
              <Text fontSize="xs" textColor="gray.400" fontWeight="light">
                {format(new Date(lastMessage?.createdAt), "p")}
              </Text>
            )}
          </Flex>
          <Text
            className={clsx(
              "truncate text-sm",
              hasSeen ? "text-gray-500" : "text-gray-900 font-base"
            )}
          >
            {lastMessageText}
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default ConnversationBox;

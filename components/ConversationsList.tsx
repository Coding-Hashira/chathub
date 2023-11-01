"use client";

import useConversation from "@/hooks/useConversation";
import { FullConversationType } from "@/types";
import { Box, Flex } from "@chakra-ui/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
import ConnversationBox from "./ConnversationBox";

interface ConversationsListProps {
  initialConversations: FullConversationType[];
}

const ConversationsList: React.FC<ConversationsListProps> = ({
  initialConversations,
}) => {
  const [conversations, setConversations] = useState(initialConversations);
  const router = useRouter();
  const { conversationId, isOpen } = useConversation();

  return (
    <aside
      className={clsx(
        `fixed inset-y-0 pb-20 lg:left-20 lg:pb-0 lg:w-80 lg:block overflow-y-auto border-r border-gray-200`,
        isOpen ? "hidden" : "block left-0 w-full"
      )}
    >
      <Box className="px-5">
        <Flex justify="space-between" mb="1rem" pt="1rem">
          <Box className="text-2xl font-bold text-neutral-800">Messages</Box>
          <Box
            rounded="full"
            p="0.5rem"
            bg="gray.100"
            textColor="gray.600"
            cursor="pointer"
            _hover={{ opacity: "75%" }}
            transition="all 0.2s"
          >
            <MdOutlineGroupAdd className="" size={20} />
          </Box>
        </Flex>
        {conversations.map((conversation) => (
          <ConnversationBox
            selected={conversationId === conversation.id}
            conversation={conversation}
            key={conversation.id}
          />
        ))}
      </Box>
    </aside>
  );
};

export default ConversationsList;

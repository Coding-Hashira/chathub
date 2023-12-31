import getConversationById from "@/actions/getConversationById";
import getMessages from "@/actions/getMessages";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/ConversationHeader";
import { Flex } from "@chakra-ui/react";
import ConversationBody from "@/components/ConversationBody";
import ConversationForm from "@/components/ConversationForm";

interface IParams {
  conversationId: string;
}

const ConversationId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <Flex h="full" flexDirection="column">
        <Header conversation={conversation} />
        <ConversationBody initialMessages={messages} />
        <ConversationForm />
      </Flex>
    </div>
  );
};

export default ConversationId;

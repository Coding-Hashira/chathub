import getConversations from "@/actions/getConversations";
import ConversationsList from "@/components/ConversationsList";
import Sidebar from "@/components/Sidebar";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  return (
    <Sidebar>
      <div className="h-screen">
        <ConversationsList initialConversations={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}

import getConversations from "@/actions/getConversations";
import getUsers from "@/actions/getUsers";
import ConversationsList from "@/components/ConversationsList";
import Sidebar from "@/components/Sidebar";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-screen">
        <ConversationsList users={users} initialConversations={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}

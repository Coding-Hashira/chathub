import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat, HiLogout } from "react-icons/hi";
import { HiUsers } from "react-icons/hi2";
import { signOut } from "next-auth/react";

import useConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        pathname: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        pathname: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        pathname: "#",
        onClick: () => signOut,
        icon: HiLogout,
      },
    ],
    [pathname, conversationId]
  );

  return routes;
};

export default useRoutes;

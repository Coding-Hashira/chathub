"use client";

import { ListItem, Text } from "@chakra-ui/react";
import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick;
    }
  };

  if (href === "#") {
    return null;
  }

  return (
    <ListItem onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          `group flex gap-x-3 rounded-md p-3 text-sm leading-6 text-gray-700 hover:text-black transition-all duration-200 font-medium hover:bg-gray-100`,
          active && `bg-gray-100 text-black`
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <Text className="sr-only">{label}</Text>
      </Link>
    </ListItem>
  );
};

export default DesktopItem;

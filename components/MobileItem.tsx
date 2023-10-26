import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface MobileItemProps {
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({
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

  return (
    <Link
      onClick={onClick}
      className={clsx(
        `group flex text-sm w-full justify-center p-4 text-gray-700 hover:text-black duration-200 transition-all hover:bg-gray-100 gap-x-3 leading-6 font-semibold`,
        active && `bg-gray-100 text-black`
      )}
      href={href}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;

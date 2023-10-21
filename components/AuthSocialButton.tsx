import { Button } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      display="inline-flex"
      w="full"
      justifyContent="center"
      rounded="md"
      bg="white"
      px="1rem"
      py="0.5rem"
      textColor="gray.500"
      border="1px solid"
      _hover={{ bg: "gray.50" }}
      _focus={{ border: "0px" }}
      borderColor="gray.300"
    >
      <Icon />
    </Button>
  );
};

export default AuthSocialButton;

"use client";

import { Button } from "@chakra-ui/react";
import React from "react";
import { signOut } from "next-auth/react";

const Users = () => {
  return (
    <Button colorScheme="sky" onClick={() => signOut()}>
      Logout
    </Button>
  );
};

export default Users;

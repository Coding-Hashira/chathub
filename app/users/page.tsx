import { Box, Button } from "@chakra-ui/react";
import React from "react";
import EmptyState from "@/components/EmptyState";

const Users = () => {
  return (
    <Box className="hidden lg:block lg:pl-80" h="100vh">
      <EmptyState />
    </Box>
  );
};

export default Users;

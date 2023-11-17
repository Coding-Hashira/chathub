"use client";

import { Input } from "@chakra-ui/react";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  id,
  type,
  register,
  required,
  errors,
}) => {
  return (
    <div className="relative w-full">
      <Input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        variant="unstyled"
        className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus-visible:outline-none focus:border-none focus-visible:border-none focus-visible:shadow-none focus:outline-none"
      />
    </div>
  );
};

export default MessageInput;

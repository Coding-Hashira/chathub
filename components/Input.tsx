"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Box, Input as ChakraInput } from "@chakra-ui/react";
import clsx from "clsx";

import React from "react";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
}) => {
  return (
    <Box>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <Box className="mt-2">
        <ChakraInput
          type={type}
          autoComplete={id}
          display="block"
          w="full"
          disabled={disabled}
          {...register(id, { required })}
          id={id}
          _focusVisible={
            errors
              ? { border: "2px solid rgb(56,189,248)" }
              : { border: "2px solid rgb(244,63,94)" }
          }
          _focus={
            errors
              ? { border: "2px solid rgb(56,189,248)" }
              : { border: "2px solid rgb(244,63,94)" }
          }
          // className={clsx(
          //   `focus-visible:shadow-none shadow-none focus-visible:border-sky-400 focus:border-sky-400`,
          //   errors && "focus:border-rose-500 focus-visible:border-rose-500"
          // )}
        />
      </Box>
    </Box>
  );
};

export default Input;

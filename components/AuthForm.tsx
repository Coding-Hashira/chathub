"use client";

import { useCallback, useState } from "react";
import { Box, Divider, Flex, Text, Button } from "@chakra-ui/react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    setVariant(variant === "LOGIN" ? "REGISTER" : "LOGIN");
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios
        .post("/api/register", data)
        .catch(() => {
          console.log("hi");
          toast.error("Something went wrong");
        })
        .finally(() => setIsLoading(false));
    }

    if (variant === "LOGIN") {
      console.log(data);
      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      })
        .then((callback) => {
          console.log("hi");
          console.log(callback);
          if (callback?.error) {
            toast.error("Invalid credentials");
          }

          if (callback?.ok && !callback?.error) {
            toast.success("Logged in!");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth Social Sign In
  };

  return (
    <Box className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <Box
        bg="white"
        shadow="base"
        px="1rem"
        py="2rem"
        className="sm:rounded-lg sm:px-10"
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              errors={errors}
              disabled={isLoading}
              id="name"
              label="Name"
              register={register}
            />
          )}
          <Input
            errors={errors}
            type="email"
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
          />
          <Input
            errors={errors}
            id="password"
            type="password"
            label="Password"
            disabled={isLoading}
            register={register}
          />
          <div>
            <Button
              colorScheme="sky"
              display="flex"
              rounded="md"
              justifyContent="center"
              px="0.75rem"
              py="0.5rem"
              fontSize="sm"
              type="submit"
              isDisabled={isLoading}
              w="full"
              fontWeight="semibold"
              onClick={() => console.log(errors)}
              textColor="white"
              _focusVisible={{
                outline: "solid",
                outlineOffset: "2px",
                outlineWidth: "2px",
                outlineColor: "rgb(14,165,233)",
              }}
            >
              {variant === "LOGIN" ? "Sign In" : "Register"}
            </Button>
          </div>
        </form>
        <Box mt="1.5rem">
          <Box position="relative">
            <Flex pos="absolute" inset="0" alignItems="center">
              <Divider borderColor="gray.300" />
            </Flex>
            <Flex position="relative" justifyContent="center" fontSize="sm">
              <Text bg="white" px="0.5rem" textColor="gray.500">
                Or continue with
              </Text>
            </Flex>
          </Box>

          <Flex mt="1.5rem" gap="0.5rem">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => {
                socialAction("github");
              }}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => {
                socialAction("google");
              }}
            />
          </Flex>

          <Flex
            justifyContent="center"
            gap="0.5rem"
            fontSize="sm"
            mt="1.5rem"
            px="0.5rem"
            textColor="gray.500"
          >
            <Text>
              {variant === "LOGIN"
                ? "New to ChatHub?"
                : "Already have an account?"}
            </Text>
            <Text
              textDecoration="underline"
              cursor="pointer"
              onClick={toggleVariant}
            >
              {variant === "LOGIN" ? "Create an account" : "Login"}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthForm;

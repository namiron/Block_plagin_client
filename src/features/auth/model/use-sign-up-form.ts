import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routing.routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export const useSignUpForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.home);
    },
  });

  const errorMessage = signUpMutation.error ? "Sign up failed" : undefined;

  return {
    router,
    register,
    handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
    errorMessage,
    isLoading: signUpMutation.isPending,
  };
};

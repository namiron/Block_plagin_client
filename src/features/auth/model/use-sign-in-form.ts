import { authControllerSignIn } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routing.routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export const useSignInForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(ROUTES.home);
    },
  });

  const errorMessage = signInMutation.error ? "Sign up failed" : undefined;

  return {
    router,
    register,
    handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
    errorMessage,
    isLoading: signInMutation.isPending,
  };
};

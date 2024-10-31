import { useResetSession } from "@/entites/session/queries";
import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routing.routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useSignOut = () => {
  const resetSession = useResetSession();
  const router = useRouter();
  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      router.push(ROUTES.signUp);
      resetSession();
    },
  });

  return {
    isLoading: signOutMutation.isPending,
    signOut: signOutMutation.mutate,
  };
};

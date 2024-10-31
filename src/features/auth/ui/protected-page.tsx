import { useSessionQuery } from "@/entites/session/queries";
import { ROUTES } from "@/shared/constants/routing.routes";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function protectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();

    const { isLoading, isError } = useSessionQuery();

    if (isLoading) {
      return <UiPageSpinner />;
    }
    if (isError) {
      router.replace(ROUTES.signIn);
    }
    return <Component {...props} />;
  };
}

import { ROUTES } from "@/shared/constants/routing.routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignInForm } from "../model/use-sign-in-form";


export function SignInForm() {
  //--------------------------
  const { handleSubmit, register, isLoading, errorMessage } = useSignInForm();
  //--------------------------

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UiTextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <UiTextField
        label="Password"
        inputProps={{ type: "password", ...register("password") }}
      />
      <UiButton disabled={isLoading} variant="primary">
        Sign In
      </UiButton>
      <UiLink className="text-center" href={ROUTES.signUp}>
        Sign Up
      </UiLink>
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
    </form>
  );
}

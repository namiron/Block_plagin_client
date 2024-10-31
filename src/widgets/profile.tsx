import { useSessionQuery } from "@/entites/session/queries";
import { SignOutButton } from "@/features/auth";

export function Profile() {
  //-------------------
  const { data: session } = useSessionQuery();

  if (!session) return null;
  //-------------------

  return (
    <div className=" block md:flex gap-x-20 items-center">
      {session?.email}
      <SignOutButton />
    </div>
  );
}

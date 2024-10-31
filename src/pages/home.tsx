import { useBlocklistQuery } from "@/entites/block-list/queries";
import { AddBlockItemForm, BlockList } from "@/features/block-list";
import { ToggleBlockingButton } from "@/features/toggle-blocking/ui/toggle-blocking-button";
import { UiHeader } from "@/shared/ui/ui-header";
import { Profile } from "@/widgets/profile";

export default function Home() {
  const { data } = useBlocklistQuery({ q: "" });
  return (
    <div>
      <div className=" min-h-screen flex flex-col bg-slate-200">
        <UiHeader right={<Profile />} />
        <div className="grid grid-cols-1">
          <aside className="px-5 pt-5">
            <ToggleBlockingButton />
          </aside>
          <main className=" px-5 pt-10">
            <h1 className="text-2xl">block list</h1>
            <AddBlockItemForm />
            <BlockList className="mt-3" />
          </main>
        </div>
      </div>
    </div>
  );
}

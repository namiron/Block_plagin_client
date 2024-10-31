import { UiTextField } from "@/shared/ui/ui-text-field";
import { useBlockItems } from "../model/use-block-items";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { BlockItem } from "./block-item";

export function BlockList({ className }: { className?: string }) {
  //---------------------------------
  const { q, isLoading, items, setQ } = useBlockItems();

  const isLoader = isLoading;
  const isEmpty = !isLoading && items.length === 0;
  const isItems = items.length > 0;
  //---------------------------------

  return (
    <div className={className}>
      <UiTextField
        className="mb-2"
        inputProps={{ value: q, onChange: (e) => setQ(e.target.value) }}
      />
      <div className="rounded-xl bg-slate-100 px-10 py-6">
        {isLoader && <UiSpinner className="text-teal-600 w-10 h-10 mx-auto" />}
        {isEmpty && <div className="text-xl pt-1 text-center">List is empty...</div>}
        {isItems &&
          items.map((item) => (
            <BlockItem key={item.id} {...item} className="mt-5" />
          ))}
      </div>
    </div>
  );
}

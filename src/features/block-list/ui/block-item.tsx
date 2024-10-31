import { AddBlockItemDtoType } from "@/shared/api/generated";
import { RemoveIconButton } from "./icons/remove-icon-button";
import { useRemoveBlockItemMutation } from "@/entites/block-list/queries";
import clsx from "clsx";

export function BlockItem({
  data,
  id,
  type,
  className,
}: {
  id: number;
  type: AddBlockItemDtoType;
  data: string;
  className?: string;
}) {

  //--------------------
  
  const removeBlockItemMutation = useRemoveBlockItemMutation();
  const handleRemove = () => {
    removeBlockItemMutation.mutate(id);
  };
  //--------------------
  return (
    <div
      className={clsx(
        className,
        "flex gap-2 items-center justify-between flex-wrap border-b-2 border-b-black-500/50",
      )}
    >
      <div className="">
        <div className="text-lg">{data}</div>
        <div className="text-slate-500">{type}</div>
      </div>
      <button
        className="ml-auto text-rose-500 hover:text-rose-600 cursor-pointer disabled:opacity-100"
        disabled={removeBlockItemMutation.isPending}
        onClick={handleRemove}
      >
        {<RemoveIconButton />}
      </button>
    </div>
  );
}

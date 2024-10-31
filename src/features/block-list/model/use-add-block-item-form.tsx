import { useAddBlockItemMutation } from "@/entites/block-list/queries";
import { AddBlockItemDtoType } from "@/shared/api/generated";
import { useForm } from "react-hook-form";

export function useAddBlockItemForm() {
  const { handleSubmit, register, watch, reset } = useForm<{
    data: string;
    type: AddBlockItemDtoType;
  }>({
    defaultValues: {
      type: AddBlockItemDtoType.Website,
    },
  });

  const type = watch("type");
  const addBlockItemMutation = useAddBlockItemMutation();

  return {
    handleSubmit: handleSubmit((data) => {
      addBlockItemMutation.mutate(data, {
        onSuccess() {
          reset();
        },
      });
    }),
    isLoading: addBlockItemMutation.isPending,
    register,
    type,
  };
}

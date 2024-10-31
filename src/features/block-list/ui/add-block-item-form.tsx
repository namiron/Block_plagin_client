import { UISelectField } from "@/shared/ui/ui-select-field";
import { useAddBlockItemForm } from "../model/use-add-block-item-form";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiButton } from "@/shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/shared/api/generated";

const typeOptions = [
  { label: "WebSite", value: AddBlockItemDtoType.Website },
  { label: "KeyWord", value: AddBlockItemDtoType.KeyWord },
];

export function AddBlockItemForm() {
  const { handleSubmit, type, register, isLoading } = useAddBlockItemForm();

  return (
    <form
      className=" block  md:flex items-center gap-2"
      onSubmit={handleSubmit}
    >
      <UISelectField
        options={typeOptions}
        className="grow min-w-200px"
        selectProps={{ ...register("type") }}
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder:
            type === "KeyWord" ? "Enter key Word..." : "Enter WebSite",
          ...register("data"),
        }}
      />
      <UiButton variant="primary" disabled={isLoading}>
        Add Block Item
      </UiButton>
    </form>
  );
}

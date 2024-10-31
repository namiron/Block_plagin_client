import clsx from "clsx";
import { PropsWithRef, SelectHTMLAttributes, useId } from "react";

export type UiSelectOptions = {
  value: string;
  label: string;
};

export type UISelectFieldProps = {
  className?: string;
  error?: string;
  label?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: UiSelectOptions[];
};

export function UISelectField({
  className,
  error,
  label,
  selectProps,
  options,
}: UISelectFieldProps) {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && label.length > 0 ? (
        <label htmlFor={id} className="block">
          {label}
        </label>
      ) : (
        ""
      )}
      <select
        {...selectProps}
        id={id}
        className={clsx(
          selectProps?.className,
          "rounded border border-slate-300 focus:border-tail-600 px-2 h-10 outline-none",
        )}
      >
        {options?.map((option,i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && error.length > 0 ? (
        <div className="text-rose-400 text-sm">{error}</div>
      ) : (
        ""
      )}
    </div>
  );
}

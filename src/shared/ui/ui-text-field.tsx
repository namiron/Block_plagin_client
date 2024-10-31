import clsx from "clsx";
import { InputHTMLAttributes, PropsWithRef, useId } from "react";

export type UiTextFieldProps = {
  className?: string;
  error?: string;
  label?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export function UiTextField({
  className,
  error,
  label,
  inputProps,
}: UiTextFieldProps) {
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
      <input
        {...inputProps}
        id={id}
        type="text"
        className={clsx(
          inputProps?.className,
          "rounded border border-slate-300 focus:border-tail-600 px-2 h-10 outline-none",
        )}
      />
      {error && error.length > 0 ? (
        <div className="text-rose-400 text-sm">{error}</div>
      ) : (
        ""
      )}
    </div>
  );
}

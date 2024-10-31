import clsx from "clsx";
import { UiLogo } from "./ui-logo";
import { ReactNode } from "react";

export function UiHeader({
  className,
  right,
}: {
  className?: string;
  right?: ReactNode;
}) {
  return (
    <header
      className={clsx(
        className,
        "px-4 py-5 border-b-2-black-300 flex justify-between items-center bg-white",
      )}
    >
      <UiLogo />
      {right}
    </header>
  );
}

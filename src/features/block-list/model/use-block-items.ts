import { useBlocklistQuery } from "@/entites/block-list/queries";
import { useDebounceValue } from "@/shared/lib/react-std";
import { useState } from "react";

export function useBlockItems() {
  const [q, setQ] = useState("");
  const blockListQuery = useBlocklistQuery({ q: useDebounceValue(q, 400) });

  const items = blockListQuery.data?.items ?? [];

  return { items, isLoading: blockListQuery.isLoading, setQ, q };
}

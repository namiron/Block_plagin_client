import { useEffect, useState } from "react";

export function useDebounceValue<T>(value: T, timeout = 0) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, timeout);
    return ()=> clearTimeout(timer)
  }, [value, timeout]);
  return debounceValue;
}

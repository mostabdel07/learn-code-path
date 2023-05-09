import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export function useCart<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = typeof window !== "undefined" ? Cookies.get(key) : null;
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      Cookies.set(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}

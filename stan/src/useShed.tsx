/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { getShed } from "./shed";

export function useShed<T>(
  key: string,
  selector: (state: T) => any
): ReturnType<typeof selector> {
  const store = getShed(key);
  const [selectedState, setSelectedState] = useState(() =>
    selector(store.getState())
  );

  useEffect(() => {
    const unsubscribe = store.subscribe((newState: T) => {
      const nextSelectedState = selector(newState);
      setSelectedState(nextSelectedState);
    });

    return unsubscribe;
  }, [store, selector]);

  return selectedState;
}

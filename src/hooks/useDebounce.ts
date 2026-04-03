import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number = 500) {
  // Step 1: Create state for the debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Step 2: Set up a timer
    const handler = setTimeout(() => {
      // Step 3: After delay, update debounced value
      setDebouncedValue(value);
    }, delay);

    // Step 4: Cleanup function (runs when value changes again)
    return () => {
      // Cancel the timer
      clearTimeout(handler);
    };
  }, [value, delay]); // Step 5: When should this effect run?

  return debouncedValue; // Step 6: What do we return?
}

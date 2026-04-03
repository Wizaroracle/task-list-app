import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Step 1: Get item from localStorage
      const item = window.localStorage.getItem(key);

      // Step 2: If item exists, parse it. Otherwise return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Add useEffect here
  useEffect(() => {
    try {
      // TODO: Save storedValue to localStorage
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]); // What should trigger this effect?

  return [storedValue, setStoredValue];
}

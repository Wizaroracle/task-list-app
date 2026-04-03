import { useState, useCallback } from "react";

export function useToggle(initialValue: boolean = false) {
  // Step 1: Create state for the boolean value
  const [value, setValue] = useState<boolean>(initialValue);

  // Step 2: Create toggle function (flips true/false)
  const toggle = useCallback(() => {
    setValue((prev) => !prev); // How do you flip a boolean?
  }, []);

  // Step 3: Create setTrue function (always sets to true)
  const setTrue = useCallback(() => {
    setValue(true); // How do you flip a boolean?
  }, []);

  // Step 4: Create setFalse function (always sets to false)
  const setFalse = useCallback(() => {
    setValue(false); // How do you flip a boolean?
  }, []);

  // Step 5: Return everything
  return { value, toggle, setTrue, setFalse };
}

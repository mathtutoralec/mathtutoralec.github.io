import { useEffect, useState } from "react";

export const useDebouncedValue = (input, time = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(input);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(input), time);
    return () => clearTimeout(timeout);
  }, [input, time]);

  return debouncedValue;
};

export default useDebouncedValue;

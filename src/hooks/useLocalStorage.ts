import { useEffect, useState } from "react";

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const storedValue = getStoredValue();
    setValue(storedValue);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localStorage");
    }
  }, [key, value]);

  const getStoredValue = () => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : storedValue;
    } catch (error) {
      console.error("Error reading localStorage");
      return initialValue;
    }
  };

  const deleteStoredValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setValue, deleteStoredValue];
};

export default useLocalStorage;

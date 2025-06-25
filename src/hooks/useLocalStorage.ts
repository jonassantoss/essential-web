import { useCallback, useEffect, useState } from "react";

const useLocalStorage = <T>(
	key: string,
	initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] => {
	const [value, setValue] = useState(initialValue);

	const getStoredValue = useCallback(() => {
		try {
			const storedValue = localStorage.getItem(key);
			return storedValue ? JSON.parse(storedValue) : storedValue;
		} catch (_error) {
			console.error("Error reading localStorage");
			return initialValue;
		}
	}, [key, initialValue]);

	const deleteStoredValue = () => {
		localStorage.removeItem(key);
		setValue(initialValue);
	};

	useEffect(() => {
		const storedValue = getStoredValue();
		setValue(storedValue);
	}, [getStoredValue]);

	useEffect(() => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (_error) {
			console.error("Error writing to localStorage");
		}
	}, [key, value]);

	return [value, setValue, deleteStoredValue];
};

export default useLocalStorage;

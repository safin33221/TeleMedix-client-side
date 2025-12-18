import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: 500): T {
    const [debouncedValue, setDebounceValue] = useState<T>(value)
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, (delay));
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    return debouncedValue
}; 

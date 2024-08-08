import { useRef, createRef } from 'react';

export const useScrollableRefs = (length) => {
    // console.log(length)
    const refs = useRef([]);
    if (refs.current.length !== length) {
        refs.current = Array.from({ length }, (_, i) => refs.current[i] || createRef());
    }
    // console.log('refs current',refs.current)
    return refs.current;
};

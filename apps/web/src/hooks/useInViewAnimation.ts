import { useEffect, useRef, useState } from 'react';

interface UseInViewAnimationOptions {
    threshold?: number;
    triggerOnce?: boolean;
    rootMargin?: string;
}

/**
 * Custom hook that detects when an element enters the viewport
 * Returns a ref to attach to the element and an inView boolean
 * 
 * @param options - Intersection Observer options
 * @returns [ref, inView] tuple
 */
export function useInViewAnimation<T extends HTMLElement = HTMLDivElement>(
    options: UseInViewAnimationOptions = {}
) {
    const { threshold = 0.1, triggerOnce = true, rootMargin = '0px' } = options;
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (triggerOnce && element) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, triggerOnce, rootMargin]);

    return [ref, inView] as const;
}

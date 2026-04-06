'use client';

import { useEffect, useRef, useState, useCallback, type RefCallback } from 'react';

interface UseRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {},
): [RefCallback<T>, boolean] {
  const { threshold = 0.12, rootMargin = '0px 0px -30px 0px', once = true } = options;
  const [visible, setVisible] = useState(false);
  const elRef = useRef<T | null>(null);
  const obsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    return () => {
      obsRef.current?.disconnect();
    };
  }, []);

  const setRef: RefCallback<T> = useCallback(
    (node: T | null) => {
      if (obsRef.current) {
        obsRef.current.disconnect();
        obsRef.current = null;
      }

      elRef.current = node;
      if (!node) return;

      if (typeof window !== 'undefined') {
        const prefersReducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches;
        if (prefersReducedMotion) {
          setVisible(true);
          return;
        }
      }

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(node);
          }
        },
        { threshold, rootMargin },
      );

      obs.observe(node);
      obsRef.current = obs;
    },
    [threshold, rootMargin, once],
  );

  return [setRef, visible];
}

export function revealClass(visible: boolean, delay?: number): string {
  const base =
    'transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]';
  const hidden = 'opacity-0 translate-y-6';
  const shown = 'opacity-100 translate-y-0';
  const delayStyle = delay ? `delay-[${delay}ms]` : '';
  return `${base} ${visible ? shown : hidden} ${delayStyle}`.trim();
}

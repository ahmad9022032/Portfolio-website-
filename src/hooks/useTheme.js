import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

/** Read whatever the inline script in index.html already decided. */
function currentTheme() {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'dark'
    : 'light';
}

/**
 * Light/dark theme state.
 *
 * The initial value is NOT computed here - index.html sets `data-theme` before
 * first paint so the page never flashes the wrong colours. This hook just
 * reads that, then owns the value from then on.
 */
export function useTheme() {
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Private mode or blocked storage: the theme still applies for this
      // visit, it just will not be remembered. Not worth failing over.
    }
  }, [theme]);

  // Follow the OS only while the visitor has not made an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      let stored;
      try {
        stored = localStorage.getItem(STORAGE_KEY);
      } catch {
        // Storage unavailable: treat it as "no explicit choice yet".
        stored = null;
      }
      if (!stored) setTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [],
  );

  return { theme, toggleTheme };
}

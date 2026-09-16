import { Moon, Sun } from 'lucide-react';
import './ThemeToggle.css';

/**
 * Light/dark switch. Presentational only - state lives in useTheme so the
 * header keeps a single source of truth.
 */
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span className="theme-toggle-icons" aria-hidden="true">
        <Sun className="theme-toggle-icon is-sun" size={17} strokeWidth={2} />
        <Moon className="theme-toggle-icon is-moon" size={17} strokeWidth={2} />
      </span>
    </button>
  );
}

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

const THEME_KEY = 'theme';

type ThemeMode = 'light' | 'dark';

type ThemeContextProps = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  mode: 'light',
  setMode: () => {
    throw new Error('Not in a theme provider context');
  },
});

export type ThemeContextProviderProps = {
  children?: React.ReactNode;
};

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  // Setup our context state
  const [themeState, setThemeState] = useState<ThemeMode>('light');

  // On the first mount of this component, we'll check the local storage
  // to set our root theme and populate our state value
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (
      localStorage.getItem(THEME_KEY) === 'dark' ||
      (!(THEME_KEY in localStorage) && mediaQuery.matches)
    ) {
      document.documentElement.classList.add('dark');
      setThemeState('dark');
      localStorage.setItem(THEME_KEY, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(THEME_KEY, 'light');
      setThemeState('light');
    }
  }, []);

  // Create a method that can be used to toggle the theme
  const setMode = useCallback(
    (next: ThemeMode) => {
      // Set the class on the root element
      if (next === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Store the choice for next time
      localStorage.setItem(THEME_KEY, next);

      // Update our state so that other components can update accordingly
      setThemeState(next);
    },
    [setThemeState],
  );

  const value = {
    mode: themeState,
    setMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

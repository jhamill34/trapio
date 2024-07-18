import { useContext } from 'react';
import { ThemeContext } from '@/context/theme-context';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from './button';

export const ThemeToggle: React.FC = () => {
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <Button
      aria-label="Theme toggle"
      onClick={() => (mode === 'dark' ? setMode('light') : setMode('dark'))}
      variant="ghost"
    >
      {mode === 'dark' && <MoonIcon />}
      {mode === 'light' && <SunIcon />}
    </Button>
  );
};

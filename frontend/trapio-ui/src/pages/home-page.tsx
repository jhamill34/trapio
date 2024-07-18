import { Button } from '@/components/ui/button';
import { ThemeContext } from '@/context/theme-context';
import { useContext } from 'react';

export const HomePage: React.FC = () => {
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <Button
      onClick={() => {
        setMode(mode === 'dark' ? 'light' : 'dark');
      }}
    >
      {mode}
    </Button>
  );
};

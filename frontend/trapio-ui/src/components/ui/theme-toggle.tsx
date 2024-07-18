import { useContext } from 'react';
import { ThemeContext } from '@/context/theme-context';
import { MoonStarIcon, SunIcon } from 'lucide-react';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './dropdown-menu';

export const ThemeToggle: React.FC = () => {
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Theme toggle"
          variant="ghost"
          size="icon"
          className="rounded-full"
        >
          {mode === 'dark' && <MoonStarIcon className="w-4 h-4" />}
          {mode === 'light' && <SunIcon className="w-4 h-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setMode('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setMode('light')}>
          Light
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

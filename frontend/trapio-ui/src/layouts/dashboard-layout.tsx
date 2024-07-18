import { NavLink, Link, NavLinkProps } from 'react-router-dom';
import {
  Blocks,
  CircleUser,
  Home,
  Menu,
  Package2,
  Workflow,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const LogoBlock: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  return (
    <Link
      to="/"
      className={cn(
        'flex items-center gap-2 text-lg font-semibold',
        mobile && 'md:hidden',
      )}
    >
      <Package2 className="h-6 w-6" />
      <span className={cn('sr-only md:not-sr-only')}>Trapio</span>
    </Link>
  );
};

const NavigationSidebar: React.FC = () => {
  return (
    <nav className="grid gap-2 md:gap-0 md:items-start text-lg md:text-sm md:px-2 lg:px-4 font-medium">
      <LogoBlock mobile />
      <NavigationLink to="/dashboard">
        <Home className="h-5 w-5 md:h-4 md:w-4" />
        Dashboard
      </NavigationLink>
      <NavigationLink to="/dashboard/integrations">
        <Blocks className="h-5 w-5 md:h-4 md:w-4" />
        Integrations
      </NavigationLink>
      <NavigationLink to="/dashboard/workflows">
        <Workflow className="h-5 w-5 md:h-4 md:w-4" />
        Workflows
      </NavigationLink>
    </nav>
  );
};

export type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <LogoBlock mobile={false} />
          </div>
          <div className="flex-1">
            <NavigationSidebar />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <NavigationSidebar />
            </SheetContent>
          </Sheet>
          <div className="flex-1" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Link to="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/support">Support</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Link to="/logout">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {children}
      </div>
    </div>
  );
};

const NavigationLink: React.FC<NavLinkProps> = (props) => {
  return (
    <NavLink
      {...props}
      aria-current="page"
      end
      caseSensitive
      className={({ isActive }) =>
        cn(
          'mx-[-0.65rem] md:mx-0 flex items-center gap-4 md:gap-3 rounded-xl md:rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground md:hover:text-primary',
          isActive && 'bg-muted text-foreground md:text-primary',
        )
      }
    />
  );
};

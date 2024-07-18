import { CircleUser } from 'lucide-react';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export const UserMenu: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <UserMenuLink to="/dashboard">Dashboard</UserMenuLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <UserMenuLink to="/settings">Settings</UserMenuLink>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <UserMenuLink to="/support">Support</UserMenuLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <UserMenuLink to="/logout">Logout</UserMenuLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const UserMenuLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, forwardedRef) => {
    const { className, ...otherProps } = props;
    return (
      <NavLink
        ref={forwardedRef}
        caseSensitive
        className={({ isActive }) => cn(className, isActive && 'text-primary')}
        {...otherProps}
      />
    );
  },
);

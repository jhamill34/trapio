import { NavLink, NavLinkProps } from 'react-router-dom';
import { LogoBlock } from '@/components/ui/logo';
import { UserMenu } from '@/components/ui/user-menu';
import { cn } from '@/lib/utils';

export type SettingsLayoutProps = {
  children: React.ReactNode;
};

const SettingsNavigation: React.FC = () => {
  return (
    <nav className="grid gap-4 text-sm text-muted-foreground">
      <SettingsNavigationLink to="/settings"> General</SettingsNavigationLink>
      <SettingsNavigationLink to="/settings/security">
        Security
      </SettingsNavigationLink>
    </nav>
  );
};

export const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
        <LogoBlock mobileOnly={false} />
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="flex-1" />
          <UserMenu />
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <SettingsNavigation />
          {children}
        </div>
      </main>
    </div>
  );
};

const SettingsNavigationLink: React.FC<NavLinkProps> = (props) => {
  return (
    <NavLink
      end
      caseSensitive
      aria-current="page"
      className={({ isActive }) => cn(isActive && 'font-semibold text-primary')}
      {...props}
    />
  );
};

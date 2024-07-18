import { cn } from '@/lib/utils';
import { Package2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LogoBlock: React.FC<{ mobileOnly: boolean }> = ({
  mobileOnly,
}) => {
  return (
    <Link
      to="/"
      className={cn(
        'flex items-center gap-2 text-lg font-semibold',
        mobileOnly && 'md:hidden',
      )}
    >
      <Package2 className="h-6 w-6" />
      <span>Trapio</span>
    </Link>
  );
};

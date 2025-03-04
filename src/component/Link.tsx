
import clsx from 'clsx';

interface LinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
  className?: string;
}


export default function Link({
  children,
  href,
  onClick,
  className,
}: LinkProps) {

  return (
    <a
      href={href}
      onClick={onClick}
      className={clsx(
        'text-foreground',
        'hover:underline hover:text-xl',
        'transition-all duration-300 ease-in-out',
        className
      )}
    >
      {children}
    </a>
  );
}
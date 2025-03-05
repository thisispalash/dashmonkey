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

  const isButton = href === '#';

  const handleClick = isButton ? (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();
  } : onClick;

  return (
    <a
      href={href}
      role={isButton ? "button" : undefined}
      onClick={handleClick}
      className={clsx(
        'text-foreground relative group',
        'hover:text-xl hover:no-underline',
        'transition-all duration-300 ease-in-out',
        className
      )}
    >
      {children}
      <span className={clsx(
        'absolute left-0 right-0 bottom-0 h-[1px] bg-current',
        'scale-x-0 group-hover:scale-x-[0.8] origin-center',
        'transition-transform duration-300 ease-in-out translate-y-1'
      )}></span>
    </a>
  );
}

import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  isDisabled?: boolean;
}

export default function Button({
  children,
  onClick,
  className,
  isDisabled = false,
}: ButtonProps) {
  
  return (
    <button
      className={clsx(
        'w-fit p-2 rounded-md cursor-pointer',
        'flex items-center justify-center',
        'border border-foreground',
        'hover:bg-foreground hover:text-background',
        'focus:outline-none focus:ring-none focus:ring-foreground',
        'transition-all duration-300 ease-in-out',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

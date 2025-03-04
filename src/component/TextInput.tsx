import clsx from 'clsx';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
}


export default function TextInput({
  label,
  value,
  onChange,
  placeholder,
  className,
  isDisabled = false,
}: TextInputProps) {

  return (
    <div className={clsx(
      'w-full',
      className
    )}>

      {label && (
        <label className={clsx(
          'w-full'
        )}>
          {label}
        </label>
      )}

      <input
        className={clsx(
          'w-full p-2 rounded-md',
          'border border-foreground',
          'focus:outline-none focus:ring-none focus:ring-foreground',
          'transition-all duration-300 ease-in-out',
          'disabled:opacity-50 disabled:cursor-not-allowed'
        )}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={isDisabled}
      />

    </div>
  );
}
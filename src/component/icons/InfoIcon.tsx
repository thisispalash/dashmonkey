import clsx from 'clsx';

function InfoSVG() {

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="1em" 
      height="1em" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={1.5} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="icon icon-tabler icons-tabler-outline icon-tabler-info-small"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 9h.01" />
      <path d="M11 12h1v4h1" />
    </svg>
  );
}

interface InfoIconProps {
  className?: string;
}

export default function InfoIcon({
  className,
}: InfoIconProps) {
  return (
    <span className={clsx(
      'inline-flex items-center justify-center',
      className
    )}>
      <InfoSVG />
    </span>
  )
}
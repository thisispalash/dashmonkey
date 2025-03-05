'use client';

import clsx from 'clsx';

import Link from '@/component/Link';

interface BaseModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function BaseModal({ title, children, isOpen, onClose }: BaseModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className={clsx(
        'fixed inset-0 bg-foreground/80 p-4',
        'flex items-center justify-center',
        'transition-opacity duration-300 ease-in-out',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
      onClick={onClose}
    >
      <div 
        className="bg-background border border-foreground rounded-lg p-6 max-w-md w-full shadow-2xl shadow-foreground/90 backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl">{title}</h2>
          {/* <button 
            onClick={onClose}
            className="text-4xl cursor-pointer hover:animate-pulse"
          >
            &times;
          </button> */}
          <Link 
            href="#" 
            onClick={onClose}
            className="text-3xl hover:!text-4xl"
          >
            &times;
          </Link>
        </div>
        
        <div className="mt-2">
          {children}
        </div>
      </div>
    </div>
  );
}
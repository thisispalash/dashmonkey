'use client';

import { cn } from '@/lib/cn';

import BaseModal from './base';
import Link from '@/component/primitive/Link';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="What is this?">
      
      <div className={cn(
        'flex flex-col gap-4 items-center justify-center',
        'font-system text-sm md:text-base',
        'overflow-y-auto max-h-[80vh]'
      )}>

        <p>
          Watch an early preview on <Link href="https://youtu.be/ThlMjkoRvD0?si=6Wb6Hw0FKmmz96QG" className="inline-flex font-bold" isExternal>YouTube</Link>.
        </p>

        <p>
          <b>Dash Mon[k]ey</b> is an onchain tamagotchi that personifies your financial health. Inspired by behavioral science and the 90s craze of virtual pets, this project externalizes your <i>monkey brain</i> to help you visualize your habits and correct them, before it&apos;s too late.
        </p>

        <p>
          If your card statements show excessive clubbing, your monkey gets liver damage. Too much food delivery? Upset stomach. But a diet rich in leafy greens? Glowing fur and clear skin.
        </p>

        <div className="w-full flex flex-col gap-2 items-center justify-center">

          <h2 className="w-full text-left text-xl">
            Sounds cool, when is it live?
          </h2>

          <p>
            The application is under active development and is expected to launch in August 2025. You can enter your email on the landing page to get notified when we do.
          </p>

        </div>
        
      </div>

    </BaseModal>
  );
}

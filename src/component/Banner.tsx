'use client';

import { cn } from '@/lib/cn';
import Link from './primitive/Link';

export default function Banner() {

  return (
    <div className={cn(
      'w-full h-auto py-2',
      'fixed top-0 left-0',
      'flex flex-col items-center justify-center gap-2',
      'bg-foreground text-background',
    )}>

      <span className="text-base">
        Dash Mon[k]ey is participating in Gitcoin Grants Round 23! Consider donating to support our work..
      </span>

      <div className="flex flex-row gap-6">
        <Link href="https://explorer.gitcoin.co/#/round/42220/28/30" className="text-sm hover:text-lg text-background">DeSci Round (Celo)</Link>
        <Link href="https://explorer.gitcoin.co/#/round/42161/867/204" className="text-sm hover:text-lg text-background">Main Round (Arbitrum)</Link>
      </div>

    </div>
  )
}
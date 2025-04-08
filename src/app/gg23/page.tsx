'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/cn';

import Link from '@/component/primitive/Link';

const GG23_URL = 'https://explorer.gitcoin.co/#/round/42220/28/30';

export default function GG23() {

  const [timer, setTimer] = useState(5000);

  useEffect(() => {

    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1000);
      }, 1000);
    } else {
      window.location.href = GG23_URL;
    }

  }, [timer]);

  return (
    <div className={cn(
      'w-full h-screen px-8',
      'flex flex-col gap-8',
      'items-center justify-center'
    )}>
      <p className="text-3xl">
        Thank you for supporting Dash Mon[k]ey!
      </p>

      <div>&nbsp;</div>

      <p className="text-lg">
        Redirecting you to the grant page in {timer / 1000} seconds..
      </p>

      <Link
        href={GG23_URL}
        className="inline-flex italic text-sm hover:text-base"
      >
        Click here to go to the grant page sooner
      </Link>
    </div>
  );
}
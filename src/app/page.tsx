'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import InfoIcon from '@/component/icons/InfoIcon';
import TextInput from '@/component/TextInput';
import Button from '@/component/Button';
import Link from '@/component/Link';

export default function Home() {

  const [ isInfoOpen, setIsInfoOpen ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ submitting, setSubmitting ] = useState(false);
  const [ submitted, setSubmitted ] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    setSubmitted(true);
    setEmail('Thanks for your interest!')
    setSubmitting(false);
  }


  return (
    <main className={clsx(
      'w-full h-screen',
      'flex flex-col items-center justify-between'
    )}>

      <div className={clsx(
        'w-full p-8',
        'text-2xl text-right',
        'flex items-end justify-end'
      )}>
        <Button
          onClick={() => setIsInfoOpen(true)}
          className={clsx(
            'border-0 !rounded-full !p-0'
          )}
        >
          <InfoIcon className="text-4xl" />
        </Button>
      </div>

      <div className={clsx(
        'w-full h-auto p-8',
        'flex flex-row items-center justify-between'
      )}>

        {/* Content */}
        <div className={clsx(
          'w-1/2 h-auto pl-16',
          'flex flex-col gap-4'
        )}>

          <h1 className={clsx(
            'w-full',
            'text-4xl'
          )}>
            Dash Mon[k]ey
          </h1>

          <div className={clsx(
            'text-lg',
            'flex flex-col gap-1'
          )}>

            <span>An onchain embodiment of your (financial) health,</span>
            <span className="pl-2">in the form of a pet monkey</span>
          </div>

          <div className={clsx(
            'flex flex-row items-start gap-2'
          )}>

            <TextInput
              label=""
              value={email}
              onChange={(value: string) => setEmail(value)}
              placeholder="Public access coming April 2025"
              isDisabled={submitting || submitted}
            />

            <Button
              onClick={handleSubmit}
              isDisabled={email.length === 0 || submitting || submitted}
              className="!w-1/3"
            >
              {submitting ? 'Submitting...' : submitted ? 'Email soon!' : 'Get Notified!'}
            </Button>

          </div>

        </div>


        {/* Image */}
        <div className={clsx(
          'w-1/2 h-auto',
          'flex items-center justify-center'
        )}>
          <Image
            src="/circus-monkey.svg"
            alt="Circus Monkey"
            width={240}
            height={240}
          />
        </div>

      </div>

      <div className={clsx(
        'w-full px-8 py-4',
        'flex flex-row items-center justify-between'
      )}>

        <div className={clsx(
          'flex flex-row items-center gap-3'
        )}>
          <Link href="#" onClick={() => {}}>discord</Link>
          <Link href="#" onClick={() => {}}>github</Link>
        </div>

        <div className={clsx()}>
          A product of <Link href="https://theslivers.xyz" onClick={() => {}}>Sliver Labs</Link>
        </div>

      </div>

    </main>
  );
}

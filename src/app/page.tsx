'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import Icon from '@/component/icons/base';
import InfoSVG from '@/component/icons/InfoSVG';
import GithubSVG from '@/component/icons/GithubSVG';
import DiscordSVG from '@/component/icons/DiscordSVG';

import Banner from '@/component/Banner';
import TextInput from '@/component/primitive/TextInput';
import Button from '@/component/primitive/Button';
import Link from '@/component/primitive/Link';

import BaseModal from '@/component/modal/base';
import InfoModal from '@/component/modal/InfoModal';

export default function Home() {

  const [ isInfoOpen, setIsInfoOpen ] = useState(false);
  const [ isCommunityOpen, setIsCommunityOpen ] = useState(false);

  const [ email, setEmail ] = useState('');
  const [ submitting, setSubmitting ] = useState(false);
  const [ submitted, setSubmitted ] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);

    const response = await fetch('/api/interested', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setSubmitted(true);
      setEmail('Thanks for your interest!')
      setSubmitting(false);
    } else {
      setSubmitting(false);
    }
  }


  return (
    <main className={clsx(
      'w-full h-screen',
      'flex flex-col items-center justify-between',
      'bg-contain bg-center bg-no-repeat',
      'bg-[url(/circus-monkey.svg)] md:bg-none',
      'bg-blend-soft-light bg-white/95'
    )}>

      <Banner />

      <div className={clsx(
        'w-full pt-28 md:pt-24 pr-8 md:pr-4',
        'text-2xl text-right',
        'flex items-end justify-end'
      )}>
        <Button
          onClick={() => setIsInfoOpen(true)}
          className={clsx(
            'border-0 !rounded-full !p-0'
          )}
        >
          <Icon as={InfoSVG} size="4xl" />
        </Button>
      </div>

      <div className={clsx(
        'w-full h-auto p-8',
        'flex flex-row items-center justify-between'
      )}>

        {/* Content */}
        <div className={clsx(
          'w-full md:w-1/2 h-auto px-4 md:pl-16',
          'flex flex-col gap-4'
        )}>

          <h1 className={clsx(
            'w-full',
            'text-2xl md:text-4xl'
          )}>
            Dash Mon[k]ey
          </h1>

          <div className={clsx(
            'text-base md:text-lg',
            'flex flex-col gap-1'
          )}>
            <span>An onchain embodiment of your (financial) health,</span>
            <span className="pl-2">in the form of a pet monkey</span>
          </div>

          <form className={clsx(
            'flex flex-col lg:flex-row items-end gap-2'
          )}>

            <TextInput
              label=""
              type="email"
              value={email}
              onChange={(value: string) => setEmail(value)}
              placeholder="Public access coming May 2025"
              isDisabled={submitting || submitted}
            />

            <Button
              onClick={handleSubmit}
              isDisabled={email.length === 0 || submitting || submitted}
            >
              {submitting ? 'Submitting...' : submitted ? 'Email soon!' : 'Get Notified!'}
            </Button>

          </form>

        </div>


        {/* Image */}
        <div className={clsx(
          'w-1/2 h-auto hidden md:flex',
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
          'md:hidden',
          'flex flex-row items-center gap-2'
        )}>
          <Link href="#" onClick={() => setIsCommunityOpen(true)}>
            <Icon as={DiscordSVG} size="lg" />
          </Link>
          <Link href="#" onClick={() => setIsCommunityOpen(true)}>
            <Icon as={GithubSVG} size="lg" />
          </Link>
        </div>

        <div className={clsx(
          'hidden md:flex',
          'flex flex-row items-center gap-3'
        )}>
          <Link href="#" onClick={() => setIsCommunityOpen(true)}>discord</Link>
          <Link href="#" onClick={() => setIsCommunityOpen(true)}>github</Link>
        </div>

        <div className={clsx()}>
          {/* A product of <Link href="https://theslivers.com" className="inline-flex">Sliver Labs</Link> */}
          A product of Sliver Labs
        </div>

      </div>

      <InfoModal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />
      <ComingSoonModal isOpen={isCommunityOpen} onClose={() => setIsCommunityOpen(false)}>
        <p>Community access coming May 2025.. Enter your email to get notified!</p>
      </ComingSoonModal>
    </main>
  );
}

function ComingSoonModal({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) {

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Coming Soon">
      {children}
    </BaseModal>
  );
}
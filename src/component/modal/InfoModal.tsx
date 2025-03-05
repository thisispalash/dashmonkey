'use client';

import BaseModal from './base';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="About">
      <div>
        <h1>Info</h1>
      </div>
    </BaseModal>
  );
}

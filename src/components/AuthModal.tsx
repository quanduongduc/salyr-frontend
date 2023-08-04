"use client";

import React, { useEffect } from 'react';
import useAuthModal from '@/hooks/useAuthModal';
import Modal from './Modal';
const AuthModal = () => {
  const { onClose, isOpen } = useAuthModal();

  // useEffect(() => {
  //   if (session) {
  //     router.refresh();
  //     onClose();
  //   }
  // }, [onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }

  return (
    <Modal 
      title="Welcome back" 
      description="Login to your account." 
      isOpen={isOpen} 
      onChange={onChange} 
    >
    </Modal>
  );
}

export default AuthModal;
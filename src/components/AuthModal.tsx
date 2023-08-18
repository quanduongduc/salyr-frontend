"use client";

import React, { useEffect, useState } from "react";
import useAuthModal from "@/hooks/useAuthModal";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/hooks/useUser";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const AuthModal = () => {
  const [authFormState, setAuthFormState] = useState(true); // True means login form
  const { onClose, isOpen } = useAuthModal();
  const user = useUser();
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  useEffect(() => {
    if (user.authenticated) {
      refreshPage();
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <>
      {authFormState ? (
        <Modal
          isOpen={isOpen}
          onChange={onChange}
          title={"Welcome Back"}
          description={"Login to your account"}
        >
          <LoginForm setAuthFormState={setAuthFormState} />
        </Modal>
      ) : (
        <Modal
          isOpen={isOpen}
          onChange={onChange}
          title="Sign Up"
          description="Create a new account to get started."
        >
          <RegisterForm setAuthFormState={setAuthFormState} />
        </Modal>
      )}
    </>
  );
};

export default AuthModal;

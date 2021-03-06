import React, { useState } from 'react';
import Button from '@components/atoms/Button';
import InputWithLabel from '@components/molecules/InputWithLabel';
import Modal from '@components/organisms/Modal';
import { useMutation } from 'react-query';
import { callLoginApi } from '../../api/user.api';
import { useHistory } from 'react-router-dom';
import {
    ModalBody,
    ErrorMessage,
    Aligner,
    RightAlignedButton
  } from './Login.style';
  import { useMultipleInputs } from '../../hooks/useMultipleInputs';
  import {
    emailValidation,
    passwordValidation,
  } from '../../lib/helpers/validation';

interface LoginModalProps {
    open: boolean,
    onClose: () => void,
    openRegisterModal: () => void,
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose, openRegisterModal }) => {
    const history = useHistory();
    const [{ loginEmail, loginPassword }, onChangeLoginInputs, resetLoginInputs] =
    useMultipleInputs({
      loginEmail: '',
      loginPassword: '',
    });

  const [error, setError] = useState({
    email: '',
    name: '',
    department: '',
    password: '',
    passwordConfirm: '',
  });

  const resetError = () => {
    setError({
      email: '',
      name: '',
      department: '',
      password: '',
      passwordConfirm: '',
    });
  };
    
const { mutateAsync: handleLogin } = useMutation(callLoginApi, {
    onSuccess: ({ success, error }) => {
      if (success) {
        console.log('login Success!');
        history.push('/course');
        resetLoginInputs();
        resetError();
      } else {
        console.log('login failed: ', error);
      }
    },
  });

  const onClickRegisterBtn = () => {
    openRegisterModal();
    resetError();
    resetLoginInputs();
  };

  const onSubmitLoginForm = () => {
    const emailError = emailValidation(loginEmail);
    const passwordError = passwordValidation(loginPassword);

    setError({
      ...error,
      email: emailError,
      password: passwordError,
    });
    if (emailError === '' && passwordError === '') {
      handleLogin({ loginEmail, loginPassword });
    }
  };

  return (
    <Modal
    width="400px"
    open={open}
    closeModal={onClose}
    title="?????????"
    headerComponent={
      <Button rect onClick={onSubmitLoginForm}>
        ???????????????
      </Button>
    }
  >
    <ModalBody>
      <InputWithLabel
        label="?????????"
        placeholder="???????????? ???????????????."
        value={loginEmail}
        onChange={onChangeLoginInputs}
        name="loginEmail"
        type="email"
        error={error.email}
      />
      <ErrorMessage>{error.email}</ErrorMessage>
      <InputWithLabel
        label="????????????"
        placeholder="??????????????? ???????????????."
        type="password"
        value={loginPassword}
        onChange={onChangeLoginInputs}
        name="loginPassword"
        error={error.password}
      />
      <ErrorMessage>{error.password}</ErrorMessage>
      <Aligner onClick={onClickRegisterBtn}>
        <RightAlignedButton>????????????</RightAlignedButton>
      </Aligner>
    </ModalBody>
  </Modal>
  )
}

export default LoginModal;
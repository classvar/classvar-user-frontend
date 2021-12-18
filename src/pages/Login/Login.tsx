import React, { useState } from 'react';
import Headerbar from '@components/organisms/Headerbar';
import Button from '@components/atoms/Button';
import InputWithLabel from '@components/molecules/InputWithLabel';
import Modal from '@components/organisms/Modal';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { callLoginApi, callSignupApi } from '../../api/user.api';

import {
  Aligner,
  LoginPage,
  ModalBody,
  RightAlignedButton,
  ErrorMessage,
} from './Login.style';
import { useModal } from '../../hooks/useModal';
import { useMultipleInputs } from '../../hooks/useMultipleInputs';
import {
  departmentValidation,
  emailValidation,
  nameValidation,
  passwordConfirmValidation,
  passwordValidation,
} from '../../lib/helpers/validation';

const Login: React.FC = () => {
  const history = useHistory();
  const [loginModalOpen, openLoginModal, closeLoginModal] = useModal(false);
  const [registerModalOpen, openRegisterModal, closeRegisterModal] =
    useModal(false);

  const [{ loginEmail, loginPassword }, onChangeLoginInputs, resetLoginInputs] =
    useMultipleInputs({
      loginEmail: '',
      loginPassword: '',
    });
  const [
    { email, name, department, password, passwordConfirm },
    onChangeRegisterInputs,
    resetRegisterInputs,
  ] = useMultipleInputs({
    email: '',
    name: '',
    department: '',
    password: '',
    passwordConfirm: '',
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

  const onSubmitSignUpForm = () => {
    const emailError = emailValidation(email);
    const nameError = nameValidation(name);
    const departmentError = departmentValidation(department);
    const passwordError = passwordValidation(password);
    const passwordConfirmError = passwordConfirmValidation(
      password,
      passwordConfirm,
    );
    setError({
      email: emailError,
      name: nameError,
      department: departmentError,
      password: passwordError,
      passwordConfirm: passwordConfirmError,
    });

    if (
      emailError === '' &&
      nameError === '' &&
      departmentError === '' &&
      passwordError === '' &&
      passwordConfirmError === ''
    ) {
      handleSignup({ department, name, email, password });
    }
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

  const { mutateAsync: handleSignup } = useMutation(callSignupApi, {
    onSuccess: ({ success, error }) => {
      if (success) {
        console.log('signup Success!');
        closeRegisterModal();
        resetRegisterInputs();
        resetError();
      } else {
        console.log('signup failed:', error);
      }
    },
  });

  const onClickLoginBtn = () => {
    closeRegisterModal();
    resetError();
    resetRegisterInputs();
  };
  const onClickRegisterBtn = () => {
    openRegisterModal();
    resetError();
    resetLoginInputs();
  };
  return (
    <>
      <Headerbar
        title="ClassVAR"
        subText="ClassVAR에 오신것을 환영합니다"
        login
        height="100px"
      >
        <Button onClick={openLoginModal}>로그인</Button>
      </Headerbar>
      <LoginPage>
        ClassVAR에 오신것을 환영합니다
        <br />
        추후에 디자인 추가
      </LoginPage>
      <Modal
        width="400px"
        open={loginModalOpen}
        closeModal={closeLoginModal}
        title="로그인"
        headerComponent={
          <Button rect onClick={onSubmitLoginForm}>
            로그인하기
          </Button>
        }
      >
        <ModalBody>
          <InputWithLabel
            label="이메일"
            placeholder="이메일을 입력하세요."
            value={loginEmail}
            onChange={onChangeLoginInputs}
            name="loginEmail"
            type="email"
            error={error.email}
          />
          <ErrorMessage>{error.email}</ErrorMessage>
          <InputWithLabel
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
            type="password"
            value={loginPassword}
            onChange={onChangeLoginInputs}
            name="loginPassword"
            error={error.password}
          />
          <ErrorMessage>{error.password}</ErrorMessage>
          <Aligner onClick={onClickRegisterBtn}>
            <RightAlignedButton>회원가입</RightAlignedButton>
          </Aligner>
        </ModalBody>
      </Modal>
      <Modal
        width="400px"
        open={registerModalOpen}
        closeModal={closeRegisterModal}
        title="회원가입"
        headerComponent={
          <Button rect onClick={onSubmitSignUpForm}>
            회원가입하기
          </Button>
        }
      >
        <ModalBody>
          <InputWithLabel
            label="이름"
            placeholder="이름을 입력하세요."
            value={name}
            onChange={onChangeRegisterInputs}
            name="name"
            error={error.name}
          />
          <ErrorMessage>{error.name}</ErrorMessage>
          <InputWithLabel
            label="학과"
            placeholder="학과를 입력하세요."
            value={department}
            onChange={onChangeRegisterInputs}
            name="department"
            error={error.department}
          />
          <ErrorMessage>{error.department}</ErrorMessage>
          <InputWithLabel
            label="이메일"
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={onChangeRegisterInputs}
            name="email"
            error={error.email}
          />
          <ErrorMessage>{error.email}</ErrorMessage>
          <InputWithLabel
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={onChangeRegisterInputs}
            name="password"
            type="password"
            error={error.password}
          />
          <ErrorMessage>{error.password}</ErrorMessage>
          <InputWithLabel
            label="비밀번호 재확인"
            placeholder="비밀번호를 다시 한번 입력하세요."
            value={passwordConfirm}
            onChange={onChangeRegisterInputs}
            name="passwordConfirm"
            type="password"
            error={error.passwordConfirm}
          />
          <ErrorMessage>{error.passwordConfirm}</ErrorMessage>
          <Aligner onClick={onClickLoginBtn}>
            <RightAlignedButton>로그인</RightAlignedButton>
          </Aligner>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Login;

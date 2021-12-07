import React from 'react';
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
  HeaderSpace,
  StyledLink,
  ModalBody,
  RightAlignedButton,
} from './Login.style';
import { useModal } from '../../hooks/useModal';
import { useMultipleInputs } from '../../hooks/useMultipleInputs';

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

  const { mutateAsync: handleLogin } = useMutation(callLoginApi, {
    onSuccess: ({ success, error }) => {
      if (success) {
        console.log('login Success!');
        history.push('/course');
        resetLoginInputs();
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
      } else {
        console.log('signup failed:', error);
      }
    },
  });
  console.log(loginEmail, loginPassword);
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
      <HeaderSpace />
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
          <Button
            rect
            onClick={() => handleLogin({ loginEmail, loginPassword })}
          >
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
          />
          <InputWithLabel
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
            type="password"
            value={loginPassword}
            onChange={onChangeLoginInputs}
            name="loginPassword"
          />
          <Aligner onClick={openRegisterModal}>
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
          <StyledLink to={'/'}>
            <Button
              rect
              onClick={() =>
                handleSignup({ department, name, email, password })
              }
            >
              회원가입하기
            </Button>
          </StyledLink>
        }
      >
        <ModalBody>
          <InputWithLabel
            label="이름"
            placeholder="이름을 입력하세요."
            value={name}
            onChange={onChangeRegisterInputs}
            name="name"
          />
          <InputWithLabel
            label="학과"
            placeholder="학과를 입력하세요."
            value={department}
            onChange={onChangeRegisterInputs}
            name="department"
          />

          <InputWithLabel
            label="이메일"
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={onChangeRegisterInputs}
            name="email"
          />
          <InputWithLabel
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={onChangeRegisterInputs}
            name="password"
            type="password"
          />
          <InputWithLabel
            label="비밀번호 재확인"
            placeholder="비밀번호를 다시 한번 입력하세요."
            value={passwordConfirm}
            onChange={onChangeRegisterInputs}
            name="passwordConfirm"
            type="password"
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default Login;

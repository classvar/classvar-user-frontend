import React, { useState } from 'react';
import Headerbar from '@components/organisms/Headerbar';
import Button from '@components/atoms/Button';
import InputWithLabel from '@components/molecules/InputWithLabel';
import Modal from '@components/organisms/Modal';
import {
  Aligner,
  LoginPage,
  HeaderSpace,
  StyledLink,
  ModalBody,
  RightAlignedButton,
} from './Login.style';

const Login: React.FC = () => {
  const [LoginModalOpen, setLoginModalOpen] = useState(false);
  const [RegisterModalOpen, setRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  return (
    <>
      <Headerbar
        title="ClassVAR"
        subText="ClassVAR에 오신것을 환영합니다"
        login
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
        open={LoginModalOpen}
        closeModal={closeLoginModal}
        title="로그인"
        headerComponent={
          <StyledLink to={'/proctor'}>
            <Button rect onClick={() => console.log('s')}>
              로그인하기
            </Button>
          </StyledLink>
        }
      >
        <ModalBody>
          <InputWithLabel label="이메일" placeholder="이메일을 입력하세요." />
          <InputWithLabel
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
          />
          <Aligner onClick={openRegisterModal}>
            <RightAlignedButton>회원가입</RightAlignedButton>
          </Aligner>
        </ModalBody>
      </Modal>
      <Modal
        width="400px"
        open={RegisterModalOpen}
        closeModal={closeRegisterModal}
        title="회원가입"
        headerComponent={
          <StyledLink to={'/'}>
            <Button rect onClick={() => console.log('s')}>
              회원가입하기
            </Button>
          </StyledLink>
        }
      >
        <ModalBody>
          <InputWithLabel label="이메일" placeholder="이메일을 입력하세요." />
          <InputWithLabel
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
          />
          <InputWithLabel
            label="비밀번호 재확인"
            placeholder="비밀번호를 다시 한번 입력하세요."
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default Login;

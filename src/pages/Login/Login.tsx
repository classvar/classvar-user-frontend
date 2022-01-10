import React from 'react';
import Headerbar from '@components/organisms/Headerbar';
import Button from '@components/atoms/Button';
import { LoginPage } from './Login.style';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import { useModal } from '../../hooks/useModal';

const Login: React.FC = () => {
  const [IsLoginModalOpen, openLoginModal, closeLoginModal] = useModal(false);
  const [IsRegisterModalOpen, openRegisterModal, closeRegisterModal] =
    useModal(false);

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
      <LoginModal
        open={IsLoginModalOpen}
        onClose={closeLoginModal}
        openRegisterModal={openRegisterModal}
      />
      <RegisterModal open={IsRegisterModalOpen} onClose={closeRegisterModal} />
    </>
  );
};

export default Login;

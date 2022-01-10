import React from 'react';
import Headerbar from '@components/organisms/Headerbar';
import Button from '@components/atoms/Button';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import { useModal } from '../../hooks/useModal';

const Login: React.FC = () => {
  const [IsLoginModalOpen, openLoginModal, closeLoginModal] = useModal(false);
  const [IsRegisterModalOpen, openRegisterModal, closeRegisterModal] =
    useModal(false);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/images/landing_bg.jpg',
        backgroundSize: 'cover',
      }}
    >
      <Headerbar
        title="ClassVAR"
        subText="ClassVAR에 오신것을 환영합니다"
        login
        height="100px"
      >
        <Button onClick={openLoginModal}>로그인</Button>
      </Headerbar>
      <LoginModal
        open={IsLoginModalOpen}
        onClose={closeLoginModal}
        openRegisterModal={openRegisterModal}
      />
      <RegisterModal open={IsRegisterModalOpen} onClose={closeRegisterModal} />
    </div>
  );
};

export default Login;

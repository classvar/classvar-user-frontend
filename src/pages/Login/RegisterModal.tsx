import React, { useState } from 'react';
import Button from '@components/atoms/Button';
import InputWithLabel from '@components/molecules/InputWithLabel';
import Modal from '@components/organisms/Modal';
import { useMutation } from 'react-query';
import { callSignupApi } from '../../api/user.api';

import {
  ModalBody,
  ErrorMessage,
} from './Login.style';
import { useMultipleInputs } from '../../hooks/useMultipleInputs';
import {
  departmentValidation,
  emailValidation,
  nameValidation,
  passwordConfirmValidation,
  passwordValidation,
} from '../../lib/helpers/validation';

interface RegisterModalProps {
    open: boolean,
    onClose: () => void,
}

const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose }) => {
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

  const handleSubmit = () => {
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
      callSignUpApi({ department, name, email, password });
    }
  };

  const { mutateAsync: callSignUpApi } = useMutation(callSignupApi, {
    onSuccess: ({ success, error }) => {
      if (success) {
        console.log('signup Success!');
        onClose();
        resetRegisterInputs();
        resetError();
      } else {
        console.log('signup failed:', error);
      }
    },
  });

  return (
      <Modal
        width="400px"
        open={open}
        closeModal={onClose}
        title="회원가입"
        headerComponent={
          <Button rect onClick={handleSubmit}>
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
        </ModalBody>
      </Modal>
  );
};

export default RegisterModal;

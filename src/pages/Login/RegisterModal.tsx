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
        title="????????????"
        headerComponent={
          <Button rect onClick={handleSubmit}>
            ??????????????????
          </Button>
        }
      >
        <ModalBody>
          <InputWithLabel
            label="??????"
            placeholder="????????? ???????????????."
            value={name}
            onChange={onChangeRegisterInputs}
            name="name"
            error={error.name}
          />
          <ErrorMessage>{error.name}</ErrorMessage>
          <InputWithLabel
            label="??????"
            placeholder="????????? ???????????????."
            value={department}
            onChange={onChangeRegisterInputs}
            name="department"
            error={error.department}
          />
          <ErrorMessage>{error.department}</ErrorMessage>
          <InputWithLabel
            label="?????????"
            placeholder="???????????? ???????????????."
            value={email}
            onChange={onChangeRegisterInputs}
            name="email"
            error={error.email}
          />
          <ErrorMessage>{error.email}</ErrorMessage>
          <InputWithLabel
            label="????????????"
            placeholder="??????????????? ???????????????."
            value={password}
            onChange={onChangeRegisterInputs}
            name="password"
            type="password"
            error={error.password}
          />
          <ErrorMessage>{error.password}</ErrorMessage>
          <InputWithLabel
            label="???????????? ?????????"
            placeholder="??????????????? ?????? ?????? ???????????????."
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

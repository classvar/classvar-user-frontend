import React from 'react';
import Input from '@components/atoms/Input';
import { Wrapper, Label } from './InputWithLabel.style';
import { InputWithLabelProps } from './InputWithLabel.type';

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, ...rest }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input {...rest} />
    </Wrapper>
  );
};

export default InputWithLabel;

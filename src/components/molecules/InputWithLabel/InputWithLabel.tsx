import React from 'react';
import Input from '@components/atoms/Input';
import { Wrapper, Label } from './InputWithLabel.style';
import { InputWithLabelProps } from './InputWithLabel.type';

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  ...inputProps
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input {...inputProps} />
    </Wrapper>
  );
};

export default InputWithLabel;

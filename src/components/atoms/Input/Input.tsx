import React from 'react';
import { StyledInput } from './Input.style';
import { InputProps } from './Input.type';

const Input: React.FC<InputProps> = ({
  disabled,
  password,
  placeholder,
  value,
  onChange,
  onPressEnter,
}) => {
  const onPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && onPressEnter) {
      onPressEnter();
    }
  };
  return (
    <>
      <StyledInput
        disabled={disabled}
        placeholder={placeholder}
        type={password ? 'password' : ''}
        value={value}
        onChange={onChange}
        onKeyDown={onPress}
      />
    </>
  );
};

export default Input;

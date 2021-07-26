import React from 'react';
import { StyledButton } from './Button.style';
import { ButtonProps } from './Button.type';

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  danger,
  secondary,
  onClick,
}) => {
  return (
    <StyledButton
      type="button"
      value={children}
      disabled={disabled}
      danger={danger}
      secondary={secondary}
      onClick={onClick}
    />
  );
};

export default Button;

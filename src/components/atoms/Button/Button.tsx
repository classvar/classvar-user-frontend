import React from 'react';
import { StyledButton } from './Button.style';
import { ButtonProps } from './Button.type';

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  danger,
  rect,
  secondary,
  onClick,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      danger={danger}
      rect={rect}
      secondary={secondary}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

import React from 'react';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: string;
  disabled?: boolean;
  danger?: boolean;
  secondary?: boolean;
  onClick: () => void;
}

import React from 'react';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  value?: string;
  disabled?: boolean;
  password?: boolean;
  onPressEnter?: () => void;
}

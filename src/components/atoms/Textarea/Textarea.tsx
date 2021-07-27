import React from 'react';
import { TextareaProps } from './Textarea.type';
import { StyledTextarea } from './Textarea.style';

const Textarea: React.FC<TextareaProps> = ({ value, disabled }) => {
  return <StyledTextarea value={value} disabled={disabled} />;
};

export default Textarea;

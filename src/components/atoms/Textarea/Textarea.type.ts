import React from 'react';

export interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  value?: string;
  disabled?: boolean;
}

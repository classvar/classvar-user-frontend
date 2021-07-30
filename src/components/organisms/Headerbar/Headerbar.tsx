import React from 'react';
import { HeaderbarProps } from './Headerbar.type';
import {
  StyledHeaderbar,
  StyledTitle,
  StyledSubText,
  StyledButtonArea,
} from './Headerbar.style';

const Headerbar: React.FC<HeaderbarProps> = ({ children, subText, Title }) => {
  return (
    <StyledHeaderbar>
      <StyledTitle>
        {Title}
        <StyledSubText>{subText}</StyledSubText>
      </StyledTitle>
      <StyledButtonArea>{children}</StyledButtonArea>
    </StyledHeaderbar>
  );
};

export default Headerbar;

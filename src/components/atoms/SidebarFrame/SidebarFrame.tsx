import React from 'react';
import { StyledSidebar, Header, Body } from './SidebarFrame.style';
import { SidebarFrameProps } from './SidebarFrame.type';

const SidebarFrame: React.FC<SidebarFrameProps> = ({
  header,
  body,
  examinee,
}) => {
  return (
    <StyledSidebar examinee={examinee}>
      <Header>{header}</Header>
      <Body>{body}</Body>
    </StyledSidebar>
  );
};

export default SidebarFrame;

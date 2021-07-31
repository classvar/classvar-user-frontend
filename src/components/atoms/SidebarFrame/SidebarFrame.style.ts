import styled, { css } from 'styled-components';
import { SidebarFrameProps } from './SidebarFrame.type';

export type ExamineeProp = Pick<SidebarFrameProps, 'examinee'>;

export const StyledSidebar = styled.div<ExamineeProp>`
  background-color: ${({ theme }) => theme.colors.primary100};
  height: 100%;
  width: 260px;
  color: ${({ theme }) => theme.colors.white};

  ${(prop) =>
    prop.examinee &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary100};
    `}
`;

export const Header = styled.div`
  height: 120px;
  display: flex;
`;

export const Body = styled.div``;

import styled, { css } from 'styled-components';
import { SidebarFrameProps } from './SidebarFrame.type';

export type ExamineeProp = Pick<SidebarFrameProps, 'examinee'>;

export const StyledSidebar = styled.div<ExamineeProp>`
  position: fixed;
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

export const Body = styled.div`
  width: 100%;
  height: calc(100% - 120px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.primary100};
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollBar};
    border-radius: 10px;
  }
`;

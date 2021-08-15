import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0 10px;
  width: 100%;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.header2};
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Toggle = styled.div`
  display: flex;
  padding: 4px 0 0 0;
  /* width: 260px; */
  height: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.primary100};
    width: 4px;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollBar};
    border-radius: 10px;
  }
`;

export type ToggleButtonProps = {
  isSelected: boolean;
};

export const ToggleButton = styled.div<ToggleButtonProps>`
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 16px;
  font-size: 14px;
  border-radius: 32px;
  color: ${({ theme }) => theme.colors.primary100};
  background: ${({ theme }) => theme.colors.primary20};
  border-color: ${({ theme }) => theme.colors.primary20};
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  margin: 0 5px 0 5px;

  ${(props) =>
    props.isSelected &&
    css`
      color: ${({ theme }) => theme.colors.primary20};
      background: ${({ theme }) => theme.colors.primary80};
      border-color: ${({ theme }) => theme.colors.primary80};
    `}
`;

export const SidebarSpace = styled.div`
  height: 100%;
  width: 260px !important;
`;

export const Body = styled.div`
  width: calc(100% - 260px);
  height: 100%;
`;

export const HeaderSpace = styled.div`
  width: 100%;
  height: 100px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: right;
  width: 140px;
  svg {
    &:first-child {
      margin-left: 80px;
    }
    margin-left: 10px;
    &:hover {
      fill: ${({ theme }) => theme.colors.primary40};
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(223px, 1fr));
`;

export const VideoArea = styled.div`
  width: 223px;
  height: 332px;
  margin: 10px;
  padding: 6px;
  background-color: ${({ theme }) => theme.colors.primary40};
`;

export const Video = styled.video`
  width: 211px;
  height: 135px;

  background-color: ${({ theme }) => theme.colors.primary20};
`;

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
`;

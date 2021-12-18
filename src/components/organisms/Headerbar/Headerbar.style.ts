import styled, { css } from 'styled-components';
import { HeaderbarProps } from './Headerbar.type';
import theme from '@styles/theme';

type HeaderProps = Pick<
  HeaderbarProps,
  'height' | 'login' | 'scrolled' | 'bgColor' | 'color' | 'titleSize'
>;
const MAIN = theme.colors.main;
const WHITE = theme.colors.white;
const HEADER1 = theme.fontSizes.header1;

export const StyledHeaderbar = styled.div<HeaderProps>`
  height: ${(props) => props.height || '100px'};
  width: 100%;
  background-color: ${(props) => props.bgColor || WHITE};
  color: ${({ theme }) => theme.colors.main};

  display: flex;
  justify-content: space-between;
  padding: 15px 3rem;

  ${(props) =>
    props.scrolled &&
    css`
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
    `}

  ${(props) =>
    props.login &&
    css`
      width: 100%;
    `}
`;

export const StyledTitle = styled.div<HeaderProps>`
  width: 100%;
  font-weight: bold;
  color: ${(props) => props.color || MAIN};
  font-size: ${(props) => props.titleSize || HEADER1};
  text-align: left;
`;

export const StyledSubText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.sub};
`;

export const StyledButtonArea = styled.div`
  height: 100%;
  width: 100%;
  padding: 19px;
  display: flex;
  align-items: center;
  flex: 1;
  div:nth-child(even) {
    margin: 0px 10px 0px 10px;
  }
  a:nth-child(even) {
    margin: 0px 10px 0px 10px;
  }
`;

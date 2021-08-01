import styled, { css } from 'styled-components';
import { HeaderbarProps } from './Headerbar.type';

type HeaderProps = Pick<HeaderbarProps, 'login' | 'scrolled'>;

export const StyledHeaderbar = styled.div<HeaderProps>`
  position: fixed;
  height: 100px;
  width: calc(100% - 260px);
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.main};

  display: flex;
  padding: 15px;

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

export const StyledTitle = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.header1};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.main};
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
  flex: 1;
  input:nth-child(even) {
    margin: 0px 10px 0px 10px;
  }
`;

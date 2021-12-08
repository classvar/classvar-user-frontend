import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '@styles/theme';

export const LoginPage = styled.div`
  height: calc(100% - 100px);
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderSpace = styled.div`
  height: 100px;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const ModalBody = styled.div``;

export const Aligner = styled.div`
  margin-top: 1rem;
  text-align: right;
`;

export const RightAlignedButton = styled.div`
  color: ${({ theme }) => theme.colors.sub};
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const ErrorMessage = styled.div`
  color: ${theme.colors.danger1};
  font-size: 0.8rem;
  padding: 0.5rem 0;
`;

import styled from 'styled-components';
import theme from '@styles/theme';

export const CardWrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  padding: 2rem 1.5rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
`;

export const Title = styled.div`
  height: 3rem;
  font-weight: bold;
  font-size: ${theme.fontSizes.body};
  color: ${theme.colors.bold};
`;

export const NumberWrapper = styled.div`
  padding-top: 0.5rem;
  display: flex;
  border-top: 2px solid ${theme.colors.background};
  align-items: center;
  justify-content: space-between;
  width: 20%;
  color: ${theme.colors.sub};
`;

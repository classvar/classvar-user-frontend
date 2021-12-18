import styled from 'styled-components';

export const Wrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

export const Label = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.main};
  margin-bottom: 0.25rem;
  font-weight: bold;
`;

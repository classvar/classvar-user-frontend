import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 160px;
  width: 250px;
  padding: 10px;
`;

export const Number = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.header1};
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.header2};
  width: 100%;
  text-align: center;
`;

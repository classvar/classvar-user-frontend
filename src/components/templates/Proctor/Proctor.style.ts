import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const Content = styled.div`
  height: 100%;
  flex-direction: column;
  width: calc(100% - 260px);
`;

export const Header = styled.div`
  display: block;
  flex: 1;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.header1};
  padding-top: 35px;
  width: 100%;
`;

export const Body = styled.div`
  padding: 20px;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.header2};
  font-weight: bold;
`;

import styled from 'styled-components';

export const StyledHeaderbar = styled.div`
  position: fixed;
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.main};
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 15px;
`;

export const StyledTitle = styled.div`
  /* height: 80px; */
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.header1};
  color: ${({ theme }) => theme.colors.main};
  text-align: left;
  /* padding: 20px; */
`;

export const StyledSubText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body};
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

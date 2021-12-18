import styled from 'styled-components';
import theme from '@styles/theme';

export const CoursePage = styled.div`
  padding: 0 3rem;
  background-color: ${theme.colors.background};
  height: 100%;
  width: 100%;
  display: block;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
`;
export const Title = styled.div`
  font-weight: bold;
  font-size: ${theme.fontSizes.header2};
`;

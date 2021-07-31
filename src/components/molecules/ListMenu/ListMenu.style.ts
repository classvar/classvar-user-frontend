import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.header3};
  font-weight: 100;
  text-decoration: none;
  color: white;
`;

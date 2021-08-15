import styled, { css } from 'styled-components';

export type CellProps = {
  isBold?: boolean;
};

export type RowProps = {
  isSelected: boolean;
};

export const StyledTable = styled.div`
  width: 100%;
`;

export const Tr = styled.div<RowProps>`
  display: grid;
  grid-template-rows: 25px 25px 30px;
  grid-template-columns: 100px 140px;
  & :focus,
  :hover {
    background-color: ${({ theme }) => theme.colors.primary80};
  }
  ${(props) =>
    props.isSelected &&
    css`
      background-color: ${({ theme }) => theme.colors.primary20};
      color: ${({ theme }) => theme.colors.primary100};
      svg {
        fill: ${({ theme }) => theme.colors.primary100};
        & :focus,
        :hover,
        :active {
          fill: ${({ theme }) => theme.colors.primary80};
        }
      }
      & :focus,
      :hover {
        background-color: ${({ theme }) => theme.colors.primary20};
      }
    `}
`;

export const Td = styled.div<CellProps>`
  &:first-child {
    grid-row: span 2;
  }
  text-overflow: ellipsis;
  margin: 0;
  padding: 0.5rem;
  cursor: pointer;
  ${(props) =>
    props.isBold &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.header2};
      font-weight: bold;
    `}
`;

import styled from 'styled-components';

export const CardListWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  gap: 20px;
  font-family: sans-serif;
  padding-top: 30px;
  width: 100%;
`;

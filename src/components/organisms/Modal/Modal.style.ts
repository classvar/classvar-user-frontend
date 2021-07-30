import styled, { css, keyframes } from 'styled-components';
import { ModalProps } from './Modal.type';

export type StyledModalProps = Pick<ModalProps, 'open'>;

const modalShow = keyframes`
 from {
        opacity: 0;
        margin-top: -50px;
    }
    to {
        opacity: 1;
        margin-top: 0;
    }
`;

const modalBgShow = keyframes`
	from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledModal = styled.div<StyledModalProps>`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);

  ${(props) =>
    props.open &&
    css`
      display: flex;
      align-items: center;
      animation: ${modalBgShow} 0.3s;
    `}
`;

export const StyledSection = styled.section`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.primary20};
  animation: ${modalShow} 0.3s;
  overflow: hidden;
`;
export const StyledHeader = styled.div`
  display: flex;
  position: relative;
  padding: 25px;
  font-size: ${({ theme }) => theme.fontSizes.header1};
`;

export const StyledTitle = styled.div`
  flex: auto;
`;

export const StyledComponents = styled.div`
  display: flex;
  padding: 8px;
  height: 48px;
  top: 0;
`;

export const StyledClose = styled.div`
  cursor: pointer;
  height: 48px;
  display: flex;
  margin-top: 9px;
  margin-left: 15px;
  svg {
    fill: ${({ theme }) => theme.colors.main};
  }
`;

export const StyledBody = styled.div`
  padding: 25px;
`;

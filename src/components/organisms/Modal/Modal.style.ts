import styled, { css, keyframes } from 'styled-components';
import { ModalProps } from './Modal.type';

export type OpenModalProps = Pick<ModalProps, 'open'>;

export type WidthModalProps = Pick<ModalProps, 'width'>;

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

export const StyledModal = styled.div<OpenModalProps>`
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

export const StyledSection = styled.section<WidthModalProps>`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  animation: ${modalShow} 0.3s;
  overflow: hidden;
  max-width: ${(props) => props.width};
`;
export const StyledHeader = styled.div`
  display: flex;
  position: relative;
  padding: 19px;
  font-size: ${({ theme }) => theme.fontSizes.header2};
  line-height: 32px;
  font-weight: bold;
  height: 70px;
`;

export const StyledTitle = styled.div`
  flex: auto;
`;

export const StyledComponents = styled.div`
  display: flex;
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
  padding: 19px;
`;

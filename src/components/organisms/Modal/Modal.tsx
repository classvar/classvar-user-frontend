import React, { MouseEvent } from 'react';
import { ModalProps } from './Modal.type';
import {
  StyledModal,
  StyledSection,
  StyledHeader,
  StyledTitle,
  StyledComponents,
  StyledBody,
} from './Modal.style';
import { useCallback } from 'react';

const Modal: React.FC<ModalProps> = ({
  title,
  width,
  open,
  headerComponent,
  closeModal,
  children,
}) => {
  const stopEventProp = useCallback((e: MouseEvent) => e.stopPropagation(), []);

  return (
    <>
      {open ? (
        <StyledModal open={open} onClick={closeModal}>
          <StyledSection width={width} onClick={stopEventProp}>
            <StyledHeader>
              <StyledTitle>{title}</StyledTitle>
              <StyledComponents>{headerComponent}</StyledComponents>
            </StyledHeader>
            <StyledBody>{children}</StyledBody>
          </StyledSection>
        </StyledModal>
      ) : null}
    </>
  );
};

export default Modal;

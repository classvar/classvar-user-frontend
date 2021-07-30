import React from 'react';
import { ModalProps } from './Modal.type';
import {
  StyledModal,
  StyledSection,
  StyledHeader,
  StyledTitle,
  StyledComponents,
  StyledClose,
  StyledBody,
} from './Modal.style';

import { ReactComponent as Close } from '@assets/close.svg';

const Modal: React.FC<ModalProps> = ({
  title,
  open,
  headerComponent,
  closeModal,
  children,
}) => {
  return (
    <>
      {open ? (
        <StyledModal open={open}>
          <StyledSection>
            <StyledHeader>
              <StyledTitle>{title}</StyledTitle>
              <StyledComponents>
                {headerComponent}
                <StyledClose>
                  <Close width="14" height="14" onClick={closeModal} />
                </StyledClose>
              </StyledComponents>
            </StyledHeader>
            <StyledBody>{children}</StyledBody>
          </StyledSection>
        </StyledModal>
      ) : null}
    </>
  );
};

export default Modal;

import React, { useRef, useEffect } from 'react';
import { ModalProps } from './Modal.type';
import {
  StyledModal,
  StyledSection,
  StyledHeader,
  StyledTitle,
  StyledComponents,
  StyledBody,
} from './Modal.style';

const Modal: React.FC<ModalProps> = ({
  title,
  width,
  open,
  headerComponent,
  closeModal,
  children,
}) => {
  const modalEl = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (open && !modalEl.current?.contains(e.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {open ? (
        <StyledModal open={open}>
          <StyledSection ref={modalEl} width={width}>
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

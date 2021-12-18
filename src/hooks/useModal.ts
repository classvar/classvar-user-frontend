import { useState } from 'react';

type modalReturnType = () => void;

export const useModal = (initialState = false) => {
  const [modal, setModalOpen] = useState(initialState);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return [modal, openModal, closeModal] as [
    boolean,
    modalReturnType,
    modalReturnType,
  ];
};

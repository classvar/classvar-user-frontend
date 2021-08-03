export interface ModalProps {
  open: boolean;
  title: string;
  width: string;
  headerComponent?: React.ReactNode;
  closeModal: () => void;
}

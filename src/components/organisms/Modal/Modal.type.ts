export interface ModalProps {
  open: boolean;
  title: string;
  headerComponent?: React.ReactNode;
  closeModal: () => void;
}

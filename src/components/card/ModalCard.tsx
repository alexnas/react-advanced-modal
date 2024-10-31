import Modal from '@/components/modal/Modal';
import ModalCardWrapper from '@/components/card/ModalCardWrapper';

interface IProps {
  show: boolean;
  toggleModal: () => void;
  children?: React.ReactNode;
}

const Card: React.FC<IProps> = ({ show, toggleModal, children }) => {
  return (
    <Modal show={show} onCloseHandleClick={toggleModal}>
      <ModalCardWrapper onCloseHandleClick={toggleModal}>
        {children}
      </ModalCardWrapper>
    </Modal>
  );
};

export default Card;

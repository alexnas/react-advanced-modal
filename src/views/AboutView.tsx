import { useState } from 'react';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Modal from '@/components/modal/Modal';
import ModalCardWrapper from '@/components/modal/ModalCardWrapper';
import ModalCardContent from '@/components/modal/ModalCardContent';

const AboutView: React.FC = () => {
  const [isShowingModal, setIsShowing] = useState(false);

  const toggleModal = () => {
    setIsShowing(!isShowingModal);
  };
  return (
    <>
      <div className="h-full min-h-screen bg-gray-200">
        <Header />

        <section className="p-3 ">
          <h1 className="flex justify-center text-3xl font-bold text-teal-800">
            About View
          </h1>

          <div className="mt-64 flex justify-center">
            <Button title="Open About Modal" handleClick={toggleModal} />
          </div>
        </section>

        <Modal show={isShowingModal} onCloseHandleClick={toggleModal}>
          <ModalCardWrapper onCloseHandleClick={toggleModal}>
            <ModalCardContent />
          </ModalCardWrapper>
        </Modal>
      </div>
    </>
  );
};

export default AboutView;

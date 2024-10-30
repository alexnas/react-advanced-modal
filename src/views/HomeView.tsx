import { useState } from 'react';
import Header from '@/components/Header';
import Modal from '@/components/modal/Modal';
import Button from '@/components/Button';

const HomeView: React.FC = () => {
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
            Hello Modal World!
          </h1>

          <div className="mt-64 flex justify-center">
            <Button title="Open Home Modal" handleClick={toggleModal} />
            <Modal show={isShowingModal} onCloseHandleClick={toggleModal} />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeView;

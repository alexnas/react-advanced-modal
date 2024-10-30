import { useState } from 'react';
import Header from '@/components/Header';
import Modal from '@/components/modal/Modal';

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
            <button
              className="rounded-xl p-5 w-fit h-auto bg-teal-500 text-gray-50 font-bold uppercase shadow-md hover:shadow-sm shadow-teal-600 hover:bg-teal-400"
              onClick={toggleModal}
            >
              Open Home Modal
            </button>
          </div>
        </section>
        <Modal show={isShowingModal} onCloseHandleClick={toggleModal} />
      </div>
    </>
  );
};

export default HomeView;

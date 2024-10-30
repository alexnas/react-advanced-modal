import { useState } from 'react';
import logo from '@/assets/react.svg';
import NavLinkButton from '@/components/NavLinkButton';
import Modal from '@/components/modal/Modal';

const Header: React.FC = () => {
  const [isShowingModal, setIsShowing] = useState(false);

  const toggleModal = () => {
    setIsShowing(!isShowingModal);
  };
  return (
    <div className="flex justify-between px-3 py-6 items-center gap-3 bg-gray-700 border-4 border-b-gray-400">
      <div className="flex justify-start gap-5">
        <img src={logo} alt="Logo" />
        <div className="font-bold text-stone-300 text-2xl">Modal</div>
      </div>

      <div className="flex items-center gap-1">
        <NavLinkButton to="/" title="Home" />
        <NavLinkButton to="/about" title="About" />
      </div>

      <button
        onClick={toggleModal}
        className="border-2 w-fit h-auto text-nowrap border-gray-500 rounded-md p-2 bg-teal-400 hover:bg-teal-300"
      >
        Top-Modal
      </button>

      <Modal show={isShowingModal} onCloseHandleClick={toggleModal} />
    </div>
  );
};

export default Header;

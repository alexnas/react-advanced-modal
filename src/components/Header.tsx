import { useState } from 'react';
import logo from '@/assets/react.svg';
import NavLinkButton from '@/components/NavLinkButton';
import Button from '@/components/Button';
import ModalCard from '@/components/card/ModalCard';
import ModalCardContent from '@/components/card/ModalCardContent';

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

      <Button title="Top-Modal" handleClick={toggleModal} />

      <ModalCard show={isShowingModal} toggleModal={toggleModal}>
        <ModalCardContent
          cardContent={'Header card content'}
          submitModal={toggleModal}
        />
      </ModalCard>
    </div>
  );
};

export default Header;

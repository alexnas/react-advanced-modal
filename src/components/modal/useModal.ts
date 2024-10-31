import { useState } from 'react';

const useModal = (initial: boolean) => {
  const [isShowingModal, setIsShowing] = useState(initial);

  const toggleModal = () => {
    setIsShowing(!isShowingModal);
  };

  return [isShowingModal, toggleModal] as const;
};

export default useModal;

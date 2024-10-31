import Header from '@/components/Header';
import Button from '@/components/Button';
import ModalCard from '@/components/card/ModalCard';
import ModalCardContent from '@/components/card/ModalCardContent';
import useModal from '@/components/modal/useModal';

const HomeView: React.FC = () => {
  const [isShowingModal, toggleModal] = useModal(false);

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
          </div>
        </section>

        <ModalCard show={isShowingModal} toggleModal={toggleModal}>
          <ModalCardContent
            cardContent={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            }
            submitModal={toggleModal}
          />
        </ModalCard>
      </div>
    </>
  );
};

export default HomeView;

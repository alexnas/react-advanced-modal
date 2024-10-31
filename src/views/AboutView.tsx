import Header from '@/components/Header';
import Button from '@/components/Button';
import ModalCard from '@/components/card/ModalCard';
import ModalCardContent from '@/components/card/ModalCardContent';
import useModal from '@/components/modal/useModal';

const AboutView: React.FC = () => {
  const [isShowingModal, toggleModal] = useModal(false);

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

        <ModalCard show={isShowingModal} toggleModal={toggleModal}>
          <ModalCardContent
            cardContent={
              'Earum fuga ipsum possimus beatae amet ab minima sed asperiores veritatis debitis vitae hic veniam, corrupti unde porro dolores iure at numquam?'
            }
            submitModal={toggleModal}
          />
        </ModalCard>
      </div>
    </>
  );
};

export default AboutView;

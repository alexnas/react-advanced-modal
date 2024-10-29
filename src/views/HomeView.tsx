import Header from '@/components/Header';

const HomeView: React.FC = () => {
  return (
    <>
      <div className="h-screen bg-gray-200">
        <Header />

        <section className="p-3 ">
          <h1 className="flex justify-center text-3xl font-bold text-teal-800">
            Hello Modal World!
          </h1>
        </section>
      </div>
    </>
  );
};

export default HomeView;

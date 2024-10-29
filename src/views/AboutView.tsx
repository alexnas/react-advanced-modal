import Header from '@/components/Header';

const AboutView: React.FC = () => {
  return (
    <>
      <div className="h-screen bg-gray-200">
        <Header />

        <section className="p-3 ">
          <h1 className="flex justify-center text-3xl font-bold text-teal-800">
            About View
          </h1>
        </section>
      </div>
    </>
  );
};

export default AboutView;

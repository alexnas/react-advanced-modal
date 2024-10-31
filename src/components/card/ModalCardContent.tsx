interface IProps {
  cardContent: string;
  submitModal: () => void;
  children?: React.ReactNode;
}

const ModalCardContent: React.FC<IProps> = ({ cardContent, submitModal }) => {
  return (
    <div className="relative w-full">
      <header>
        <h3 className="flex justify-center text-teal-500 font-bold text-xl my-3">
          Modal Title
        </h3>
      </header>
      <div className="p-5">{cardContent}</div>
      <footer className="px-6 py-4 bg-gray-100 ">
        <button
          type="button"
          className="rounded-md border-none bg-teal-600 p-3 text-white leading-5 cursor-pointer"
          onClick={submitModal}
        >
          Submit
        </button>
      </footer>
    </div>
  );
};

export default ModalCardContent;

interface IProps {
  onCloseHandleClick: () => void;
  children?: React.ReactNode;
}

const ModalCardWrapper: React.FC<IProps> = ({
  children,
  onCloseHandleClick,
}) => {
  return (
    <div
      className="relative bg-white w-[500px] h-fit border-1  border-gray-200 rounded-2xl overflow-hidden mt-0 mx-4 mb-40"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="z-10">{children}</div>

      <button
        type="button"
        className="absolute top-2 right-6 text-4xl leading-none text-rose-600 pointer font-extrabold border-0"
        onClick={onCloseHandleClick}
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <button
        className="absolute z-100 bottom-4 right-6 rounded-md border-none bg-rose-600 p-3 text-white leading-5 cursor-pointer"
        onClick={onCloseHandleClick}
      >
        Close Modal
      </button>
    </div>
  );
};

export default ModalCardWrapper;

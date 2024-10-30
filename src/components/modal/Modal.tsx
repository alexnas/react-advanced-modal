import ReactDOM from 'react-dom';

interface IPropsModal {
  show: boolean;
  onCloseHandleClick: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<IPropsModal> = ({ show, onCloseHandleClick }) => {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="flex absolute justify-center items-center top-0 right-0 bottom-0 left-0 bg-gray-500/80 w-full h-full min-h-screen"
      onClick={onCloseHandleClick}
    >
      <div
        className="flex flex-col justify-between relative bg-white w-[500px] h-52 border-1  border-gray-200 rounded-2xl overflow-hidden mt-0 mx-4 mb-40"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full">
          <h3 className="flex justify-center text-teal-500 font-bold text-xl my-3">
            Modal Title
          </h3>
          <button
            type="button"
            className="absolute top-2 right-6 text-4xl leading-none text-rose-600 pointer font-extrabold border-0"
            onClick={onCloseHandleClick}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="p-5">Click on the close button to close the modal.</div>
        <div className="flex justify-end w-full h-16 bg-gray-100 px-6 py-3">
          <button
            className="rounded-md border-none bg-rose-600 p-3 text-white leading-5 cursor-pointer"
            onClick={onCloseHandleClick}
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

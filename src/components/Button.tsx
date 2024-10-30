interface IButtonProps {
  title: string;
  handleClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="border-2 w-fit h-auto text-nowrap border-gray-500 rounded-md p-2 bg-teal-400 hover:bg-teal-300"
    >
      {title}
    </button>
  );
};

export default Button;

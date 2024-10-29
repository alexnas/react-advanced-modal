import logo from '@/assets/react.svg';
import NavLinkButton from './NavLinkButton';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between px-3 py-6 items-center gap-3 bg-gray-700 border-4 border-b-gray-400">
      <div className="flex justify-start gap-5">
        <img src={logo} alt="Logo" />
        <div className="font-bold text-stone-300 text-2xl">Simple Modal</div>
      </div>

      <div>
        <NavLinkButton to="/" title="Home" />
        <NavLinkButton to="/about" title="About" />
      </div>
    </div>
  );
};

export default Header;

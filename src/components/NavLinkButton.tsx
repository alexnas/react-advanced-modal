import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  title: string;
};

const NavLinkButton: React.FC<Props> = (props) => {
  return (
    <>
      <NavLink
        to={props.to}
        className={({ isActive }) =>
          clsx(
            'rounded-md px-3 py-2 text-sm hover:bg-gray-700 hover:text-white',
            isActive ? 'font-medium text-orange-400' : 'text-gray-300'
          )
        }
      >
        {props.title}
      </NavLink>
    </>
  );
};

export default NavLinkButton;

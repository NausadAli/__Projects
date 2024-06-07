// import {hamburger} from '../assets/icons/hamburger.svg'
// import { HeaderLogo } from '../assets/images/header-logo.svg'
import headerLogo from '/src/assets/images/header-logo.svg';
import {navLinks} from '../constants/index'
import { hamburger } from '../assets/icons';
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((items)=>(
            <li key={items.label}>
              <a href={items.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {items.label}
              </a>
            </li>
          ))}
        </ul>


        {/* Add YOur onClick When it is displayed */}
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="hamburger" height={20} width={20}/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

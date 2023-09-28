import { hamburger } from '@/app/assets/icons';
import { headerLogo } from '@/app/assets/images';
import { navLinks } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image
            src={headerLogo}
            alt="logo"
            width={130}
            height={29}
          />
        </Link>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="max-lg:block hidden">
          <Image
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
          />
        </button>
      </nav>
    </header>
  );
};

export default Nav;

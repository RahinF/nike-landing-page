import { footerLogo } from '@/app/assets/images';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks, socialMedia } from '@/app/constants';

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex gap-20 xl:flex-row flex-col">
        <div className="shrink-0">
          <Link href="/">
            <Image
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
            />
          </Link>
          <p className="text-white-400 max-w-md mt-6 font-montserrat">
            Prepare your footwear for the upcoming season at the closest Nike
            store. Discover your ideal size in-store and unlock rewards.
          </p>

          <div className="flex gap-4 mt-12">
            {socialMedia.map(({ src, alt }, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-full cursor-pointer"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-20 w-full flex-col md:flex-row items-center md:items-start">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-montserrat text-xl font-medium text-white">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2 mt-4">
                {section.links.map(({ link, name }) => (
                  <li
                    key={name}
                    className="text-white-400 hover:text-slate-gray font-montserrat transition duration-300"
                  >
                    <Link href={link}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-white-400 text-center mt-24">
        &copy; <span>Copyright. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;

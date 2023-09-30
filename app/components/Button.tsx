import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  label: string;
  iconURL?: string;
  alt?: string;
  type?: 'secondary';
}

const Button = ({ label, iconURL, alt, type }: Props) => {
  return (
    <button
      className={clsx(
        [
          'flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full',
        ],
        {
          ' bg-white text-slate-gray border-slate-gray': type === 'secondary',
          ' bg-coral-red text-white border-coral-red': type === undefined,
        },
      )}
    >
      {label}
      {iconURL && (
        <Image
          src={iconURL}
          alt={alt ?? 'button icon'}
          className="ml-2 rounded-full h-5 w-5"
          height={20}
          width={20}
        />
      )}
    </button>
  );
};

export default Button;

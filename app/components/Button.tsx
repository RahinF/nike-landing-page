import Image from 'next/image';

interface Props {
  label: string;
  iconURL?: string;
  alt?: string;
}

const Button = ({ label, iconURL, alt }: Props) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
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

import Image from 'next/image';

interface Props {
  imgURL: any;
  name: string;
  price: string;
}

const PopularProductCard = ({ imgURL, name, price }: Props) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Image
        src={imgURL}
        alt={name}
        className="w-72 h-72"
      />
      <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-lg leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;

import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  imgURL: { thumbnail: string; bigShoe: StaticImageData };
  changeBigShoeImg: Dispatch<SetStateAction<StaticImageData>>;
  bigShoeImg: StaticImageData;
}

const ShoeCard = ({ bigShoeImg, changeBigShoeImg, imgURL }: Props) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };

  return (
    <div
      data-testid="shoe-container"
      className={clsx(
        [
          'border-2 rounded-xl cursor-pointer max-sm:flex-1 transition duration-300',
        ],
        {
          'border-coral-red': bigShoeImg === imgURL.bigShoe,
          'border-transparent': bigShoeImg !== imgURL.bigShoe,
        },
      )}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;

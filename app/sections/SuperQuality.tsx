import Image from 'next/image';
import { shoe8 } from '@/app/assets/images';
import Button from '@/app/components/Button';

const SuperQuality = () => {
  return (
    <div
      id="about-us"
      className="flex max-container max-lg:flex-col items-center justify-between w-full"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Elevate Your Style:{' '}
          <span className="text-coral-red">Impeccable Quality</span> in Every
          Step
        </h2>
        <p className="max-w-prose mt-8 info-text">
          Our handpicked selection of shoes conforms to the highest standards of
          craftsmanship and durability. From premium materials to ergonomic
          designs, we offer comfortable and stylish footwear that stands the
          test of time. Discover your perfect pair today!
        </p>
        <div className="my-12">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default SuperQuality;

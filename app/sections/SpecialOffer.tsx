import { offer } from '@/app/assets/images';
import Button from '@/app/components/Button';
import Image from 'next/image';

const SpecialOffer = () => {
  return (
    <div className="max-container flex justify-between items-center max-xl:flex-col-reverse gap-10">
      <div>
        <Image
          src={offer}
          alt="product promotion"
          width={773}
          height={687}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text max-w-prose">
          Upgrade your shoe game with our special offer: Buy One, Get One 30%
          Off, mix and match your favorite pairs. Explore Seasonal Clearance for
          up to 60% off selected styles. Don&apos;t miss out!
        </p>

        <p className="mt-4 info-text max-w-prose">
          For loyal customers, accumulate points for future savings, and every
          leather or suede shoe purchase includes a complimentary cleaning kit.
          Visit us today to find stylish, budget-friendly footwear. Thank you
          for choosing us as your shoe destination!
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button label="View details" />
          <Button
            label="Learn more"
            type="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;

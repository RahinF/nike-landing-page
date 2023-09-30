import { star } from '@/app/assets/icons';
import Image from 'next/image';

interface Props {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({ customerName, feedback, imgURL, rating }: Props) => {
  return (
    <div
      data-testid="review-card"
      className="bg-white rounded-2xl shadow-3xl px-10 pb-12 w-96"
    >
      <div className="-mt-16 flex justify-center">
        <Image
          src={imgURL}
          alt={`${customerName} avatar`}
          width={128}
          height={128}
          className="rounded-full shadow-inner"
        />
      </div>

      <h3 className="font-palanquin text-3xl text-center font-bold mt-4">
        {customerName}
      </h3>

      <div className="flex gap-2.5 justify-center my-2">
        <Image
          src={star}
          alt="star icon"
          width={24}
          height={24}
        />
        <span className="font-montserrat text-slate-gray">{rating}</span>
      </div>

      <p className="font-montserrat text-slate-gray mt-8 text-center">
        {feedback}
      </p>
    </div>
  );
};

export default ReviewCard;

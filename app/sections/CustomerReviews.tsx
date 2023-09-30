import { reviews } from '@/app/constants';
import ReviewCard from '@/app/components/ReviewCard';

const CustomerReviews = () => {
  return (
    <div className="max-container">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-palanquin font-bold">
          Walk of Fame: Customer <span className="text-coral-red">Reviews</span>
        </h2>
        <p className="info-text mt-8 max-w-prose">
          Discover the shoe shopping experience through the lens of our
          satisfied customers, offering insights on quality, comfort, and style.
        </p>
      </div>

      <div className="mt-36 flex gap-28 md:gap-12 flex-col md:flex-row justify-center items-center">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            {...review}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;

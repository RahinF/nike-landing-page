import PopularProductCard from '../components/PopularProductCard';
import { products } from '../constants';

const PopularProducts = () => {
  return (
    <div
      id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="max-w-prose mt-2 font-montserrat text-slate-gray">
          Experience the perfect blend of comfort and style in our dedicated
          section showcasing footwear that prioritizes both, ensuring you look
          and feel great with every step.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard
            key={product.name}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;

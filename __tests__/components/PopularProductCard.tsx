import PopularProductCard from '@/app/components/PopularProductCard';
import { products } from '@/app/constants';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Popular Product Card', () => {
  const props = products[0];

  it('render product image', () => {
    render(<PopularProductCard {...props} />);
    const img = screen.getByRole('img', { name: props.name });
    expect(img).toBeInTheDocument();
  });

  it('render product name', () => {
    render(<PopularProductCard {...props} />);
    const name = screen.getByText(props.name);
    expect(name).toBeInTheDocument();
  });

  it('render product price', () => {
    render(<PopularProductCard {...props} />);
    const price = screen.getByText(props.price);
    expect(price).toBeInTheDocument();
  });
});

import PopularProducts from '@/app/sections/PopularProducts';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Popular Products', () => {
  it('renders heading', () => {
    render(<PopularProducts />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/our popular products/i);
  });

  it('renders keyword with color', () => {
    render(<PopularProducts />);
    const text = screen.getByText(/popular/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('text-coral-red');
  });

  it('renders paragraph text', () => {
    render(<PopularProducts />);
    const text = screen.getByText(
      /Experience the perfect blend of comfort and style in our dedicated section showcasing footwear that prioritizes both, ensuring you look and feel great with every step./i,
    );
    expect(text).toBeInTheDocument();
  });
});

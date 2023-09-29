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
      /Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value/i,
    );
    expect(text).toBeInTheDocument();
  });
});

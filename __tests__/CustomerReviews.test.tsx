import { reviews } from '@/app/constants';
import CustomerReviews from '@/app/sections/CustomerReviews';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Customer Reviews', () => {
  it('renders heading', () => {
    render(<CustomerReviews />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Walk of Fame: Customer Reviews/i);
  });

  it('renders paragraph', () => {
    render(<CustomerReviews />);
    const text = screen.getByText(
      /Discover the shoe shopping experience through the lens of our satisfied customers, offering insights on quality, comfort, and style./i,
    );
    expect(text).toBeInTheDocument();
  });

  it('renders 2 review cards', () => {
    render(<CustomerReviews />);
    const cards = screen.getAllByTestId('review-card');
    expect(cards).toHaveLength(reviews.length);
  });
});

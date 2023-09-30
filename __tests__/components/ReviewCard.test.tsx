import ReviewCard from '@/app/components/ReviewCard';
import { reviews } from '@/app/constants';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Review Card', () => {
  const cardProps = reviews[0];

  it('renders customer name', () => {
    render(<ReviewCard {...cardProps} />);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(cardProps.customerName);
  });

  it('renders customer feedback', () => {
    render(<ReviewCard {...cardProps} />);
    const text = screen.getByText(cardProps.feedback);
    expect(text).toBeInTheDocument();
  });

  it('renders customer avatar', () => {
    render(<ReviewCard {...cardProps} />);
    const image = screen.getByRole('img', {
      name: `${cardProps.customerName} avatar`,
    });
    expect(image).toBeInTheDocument();
  });

  it('renders customer rating', () => {
    render(<ReviewCard {...cardProps} />);
    const rating = screen.getByText(cardProps.rating);
    expect(rating).toBeInTheDocument();
  });

  it('renders rating icon', () => {
    render(<ReviewCard {...cardProps} />);
    const image = screen.getByRole('img', { name: 'star icon' });
    expect(image).toBeInTheDocument();
  });
});

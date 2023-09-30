import SpecialOffer from '@/app/sections/SpecialOffer';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Special Offer', () => {
  it('renders heading', () => {
    render(<SpecialOffer />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/special offer/i);
  });

  it('renders paragraph text 1', () => {
    render(<SpecialOffer />);
    const text = screen.getByText(
      /Upgrade your shoe game with our special offer: Buy One, Get One 30% Off, mix and match your favorite pairs. Explore Seasonal Clearance for up to 60% off selected styles. Don't miss out!/i,
    );
    expect(text).toBeInTheDocument();
  });

  it('renders paragraph text 2', () => {
    render(<SpecialOffer />);
    const text = screen.getByText(
      /For loyal customers, accumulate points for future savings, and every leather or suede shoe purchase includes a complimentary cleaning kit. Visit us today to find stylish, budget-friendly footwear. Thank you for choosing us as your shoe destination!/i,
    );
    expect(text).toBeInTheDocument();
  });

  it('renders image', () => {
    render(<SpecialOffer />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('renders 2 buttons', () => {
    render(<SpecialOffer />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('renders view detail button', () => {
    render(<SpecialOffer />);
    const button = screen.getByRole('button', { name: /view details/i });
    expect(button).toBeInTheDocument();
  });

  it('renders learn more button', () => {
    render(<SpecialOffer />);
    const button = screen.getByRole('button', { name: /learn more/i });
    expect(button).toBeInTheDocument();
  });
});

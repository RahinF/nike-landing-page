import SuperQuality from '@/app/sections/SuperQuality';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Super Quality', () => {
  it('renders heading', () => {
    render(<SuperQuality />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(
      /Elevate Your Style: Impeccable Quality In Every Step/i,
    );
  });

  it('renders keyword with color', () => {
    render(<SuperQuality />);
    const text = screen.getByText(/Impeccable Quality/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('text-coral-red');
  });

  it('renders paragraph text', () => {
    render(<SuperQuality />);
    const text = screen.getByText(
      /Our handpicked selection of shoes conforms to the highest standards of craftsmanship and durability. From premium materials to ergonomic designs, we offer comfortable and stylish footwear that stands the test of time. Discover your perfect pair today!/i,
    );
    expect(text).toBeInTheDocument();
  });

  it('renders button', () => {
    render(<SuperQuality />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('View details');
  });

  it('renders image', () => {
    render(<SuperQuality />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
});

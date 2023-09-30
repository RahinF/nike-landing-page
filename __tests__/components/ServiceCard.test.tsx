import ServiceCard from '@/app/components/ServiceCard';
import { services } from '@/app/constants';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Service Card', () => {
  const cardProps = services[0];

  it('renders image', () => {
    render(<ServiceCard {...cardProps} />);

    const image = screen.getByRole('img', { name: cardProps.label });
    expect(image).toBeInTheDocument();
  });

  it('renders label', () => {
    render(<ServiceCard {...cardProps} />);

    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(cardProps.label);
  });

  it('renders subtext', () => {
    render(<ServiceCard {...cardProps} />);

    const heading = screen.getByText(cardProps.subtext);
    expect(heading).toBeInTheDocument();
  });
});

import { services } from '@/app/constants';
import Services from '@/app/sections/Services';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Services', () => {
  it('renders 3 cards', () => {
    render(<Services />);
    const cards = screen.getAllByTestId('service-card');
    expect(cards).toHaveLength(services.length);
  });
});

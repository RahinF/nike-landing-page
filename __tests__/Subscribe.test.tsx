import Subscribe from '@/app/sections/Subscribe';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Subscribe', () => {
  it('renders heading', () => {
    render(<Subscribe />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Sign Up for Updates & Newsletter/i);
  });

  it('renders input field', () => {
    render(<Subscribe />);
    const inputField = screen.getByLabelText(
      /Sign Up for Updates & Newsletter/i,
    );
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute('placeholder', 'subscribe@nike.com');
  });

  it('renders button', () => {
    render(<Subscribe />);
    const button = screen.getByRole('button', { name: /sign up/i });
    expect(button).toBeInTheDocument();
  });
});

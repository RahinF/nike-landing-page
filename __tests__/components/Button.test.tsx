import Button from '@/app/components/Button';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  const buttonProps = {
    label: 'button label',
    iconURL: 'https://placehold.co/600x400/png',
    alt: 'button alt',
  };

  it('render button', () => {
    render(<Button {...buttonProps} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('render button label', () => {
    render(<Button {...buttonProps} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(buttonProps.label);
  });

  it('render button icon', () => {
    render(<Button {...buttonProps} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', buttonProps.alt);
  });
});

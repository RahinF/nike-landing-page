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

  it('render button primary style by default', () => {
    render(<Button {...buttonProps} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-coral-red text-white border-coral-red');
  });

  it('render button secondary style if passed as props', () => {
    render(
      <Button
        {...buttonProps}
        type="secondary"
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-white text-slate-gray border-slate-gray');
  });
});

import { statistics } from '@/app/constants';
import Hero from '@/app/sections/Hero';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Hero', () => {
  it('renders subtext', () => {
    render(<Hero />);
    const text = screen.getByText(/our summer collection/i);
    expect(text).toBeInTheDocument();
  });

  it('renders heading text', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/the new arrival nike shoes/i);
  });

  it('renders heading keyword is red', () => {
    render(<Hero />);
    const text = screen.getByText('Nike');
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('text-coral-red');
  });

  it('renders paragraph text', () => {
    render(<Hero />);
    const text = screen.getByText(
      /discover stylish nike arrivals, quality comfort, and innovation for your active life./i,
    );
    expect(text).toBeInTheDocument();
  });

  it('renders statistic labels', () => {
    render(<Hero />);

    const stats = statistics.map((statistic) =>
      screen.getByText(statistic.label),
    );
    expect(stats).toHaveLength(statistics.length);

    stats.forEach((stat, index) => {
      expect(stat).toHaveTextContent(statistics[index].label);
    });
  });

  it('renders statistic values', () => {
    render(<Hero />);

    const stats = statistics.map((statistic) =>
      screen.getByText(statistic.value),
    );
    expect(stats).toHaveLength(statistics.length);

    stats.forEach((stat, index) => {
      expect(stat).toHaveTextContent(statistics[index].value);
    });
  });

  it('renders hero big image', () => {
    render(<Hero />);

    const image = screen.getByRole('img', { name: 'shoe collection' });
    expect(image).toBeInTheDocument();
  });
});

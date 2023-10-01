import { footerLinks, socialMedia } from '@/app/constants';
import Footer from '@/app/sections/Footer';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  it('renders logo link', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: 'logo' });
    expect(link).toBeInTheDocument();
  });

  it('renders logo image', () => {
    render(<Footer />);
    const image = screen.getByRole('img', { name: 'logo' });
    expect(image).toBeInTheDocument();
  });

  it('renders company paragraph', () => {
    render(<Footer />);
    const text = screen.getByText(
      /Prepare your footwear for the upcoming season at the closest Nike store. Discover your ideal size in-store and unlock rewards./i,
    );
    expect(text).toBeInTheDocument();
  });

  it('renders social icons', () => {
    render(<Footer />);

    const icons = socialMedia.map((icon) =>
      screen.getByRole('img', { name: icon.alt }),
    );

    icons.forEach((icon) => {
      expect(icon).toBeInTheDocument();
    });

    expect(icons).toHaveLength(socialMedia.length);
  });

  it('renders footer links', () => {
    render(<Footer />);

    footerLinks.forEach((section) => {
      const heading = screen.getByRole('heading', {
        level: 3,
        name: section.title,
      });
      expect(heading).toBeInTheDocument();

      section.links.forEach((link) => {
        const footerLink = screen.getByRole('link', { name: link.name });
        expect(footerLink).toBeInTheDocument();
        expect(footerLink).toHaveAttribute('href', link.link);
      });

      const links = section.links.map((link) =>
        screen.getByRole('link', { name: link.name }),
      );
      expect(links).toHaveLength(section.links.length);
    });
  });

  it('renders copyright', () => {
    render(<Footer />);

    const copyright = screen.getByText(/Copyright. All rights reserved./i);

    expect(copyright).toBeInTheDocument();
  });
});

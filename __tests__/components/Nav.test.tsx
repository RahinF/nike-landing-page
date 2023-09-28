import Nav from '@/app/components/Nav';
import { navLinks } from '@/app/constants';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Nav', () => {
  it('renders logo link with correct href', () => {
    render(<Nav />);
    const link = screen.getByRole('link', { name: 'logo' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders header logo', () => {
    render(<Nav />);
    const image = screen.getByRole('img', { name: 'logo' });
    expect(image).toBeInTheDocument();
  });

  it('renders 4 link items', () => {
    render(<Nav />);
    const links = screen.getAllByRole('listitem');
    expect(links).toHaveLength(4);
  });

  it('renders nav items with correct href', () => {
    render(<Nav />);

    const links = navLinks.map((link) => screen.getByText(link.label));
    expect(links).toHaveLength(navLinks.length);

    links.forEach((link, index) => {
      expect(link).toHaveTextContent(navLinks[index].label);
      expect(link).toHaveAttribute('href', navLinks[index].href);
    });
  });

  it('renders hamburger', () => {
    render(<Nav />);
    const button = screen.getByRole('button');
    const hamburgerIcon = screen.getByRole('img', { name: 'hamburger' });
    expect(hamburgerIcon).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

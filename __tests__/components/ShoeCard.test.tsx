import { bigShoe1 } from '@/app/assets/images';
import ShoeCard from '@/app/components/ShoeCard';
import { shoes } from '@/app/constants';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('ShoeCard', () => {
  const shoeCardProps = {
    bigShoeImg: bigShoe1,
    imgURL: shoes[0],
    changeBigShoeImg: jest.fn(),
  };

  it('render image', () => {
    render(<ShoeCard {...shoeCardProps} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('has a colored border if current item is selected', () => {
    render(<ShoeCard {...shoeCardProps} />);
    const container = screen.getByTestId('shoe-container');
    expect(container).toHaveClass('border-coral-red');
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';


describe('Counter', () => {
  // beforeEach(() => {
  //   do any required setup
  // });

  it('shold render the Add one button', () => {
    const { getByText } = render(<Counter />);

    const incrementButton = getByText('Add one');

    expect(incrementButton).toBeInTheDocument();
  });

  it('should have initial count as 0', () => {
    const { getByText } = render(<Counter />);

    const currentCountStatement = getByText('Current count: 0');

    expect(currentCountStatement).toBeInTheDocument();
  });

  it('should increment count on button click', () => {
    const { getByText } = render(<Counter />);

    const incrementButton = getByText('Add one');
    fireEvent.click(incrementButton);

    const currentCountStatement = getByText('Current count: 1');

    expect(currentCountStatement).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageProduct from './PageProduct';

describe('<PageProduct />', () => {
  test('it should mount', () => {
    render(<PageProduct />);
    
    const pageProduct = screen.getByTestId('PageProduct');

    expect(pageProduct).toBeInTheDocument();
  });
});
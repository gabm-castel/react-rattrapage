import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageInfo from './PageInfo';

describe('<PageInfo />', () => {
  test('it should mount', () => {
    render(<PageInfo />);
    
    const pageInfo = screen.getByTestId('PageInfo');

    expect(pageInfo).toBeInTheDocument();
  });
});
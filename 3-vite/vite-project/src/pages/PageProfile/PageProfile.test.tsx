import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageProfile from './PageProfile';

describe('<PageProfile />', () => {
  test('it should mount', () => {
    render(<PageProfile />);
    
    const pageProfile = screen.getByTestId('PageProfile');

    expect(pageProfile).toBeInTheDocument();
  });
});
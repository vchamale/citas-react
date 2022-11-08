/* eslint-disable no-undef */
import Header from '../Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('Renders the proper title', () => {
    render(<Header titleP1="titleP1" titleP2="Titulo 2" />);
    expect(screen.getByText('titleP1')).toBeInTheDocument();
    expect(screen.getByText('Titulo 2')).toBeInTheDocument();
  });
});

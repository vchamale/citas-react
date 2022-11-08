/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Error from '../Error';

describe('Error Component', () => {
  it('Checks error', () => {
    render(
      <Error>
        <p>Hola</p>
      </Error>
    );
    expect(screen.getByText('Hola')).toBeInTheDocument();
  });
});

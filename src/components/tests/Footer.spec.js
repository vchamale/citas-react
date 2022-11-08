/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footer Component', () => {
  it("Loads the component's content", () => {
    render(<Footer />);
    screen.debug();
  });
});

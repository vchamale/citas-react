/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSelector from '../LanguageSelector';

describe('Language Selector', () => {
  it('Changes Language', () => {
    let language = 'es-GT';
    const setLanguage = jest.fn(() => {
      if (language === 'es-GT') {
        language = 'en-US';
      } else {
        language = 'es-GT';
      }
      return language;
    });
    render(<LanguageSelector language={language} setLanguage={setLanguage} />);
    expect(screen.getByText('en-US')).toBeInTheDocument();
    fireEvent.click(screen.getByText('en-US'));
    expect(setLanguage).toHaveBeenCalled();
  });
  it('Changes Language english default', () => {
    let language = 'en-US';
    const setLanguage = jest.fn(() => {
      if (language === 'es-GT') {
        language = 'en-US';
      } else {
        language = 'es-GT';
      }
      return language;
    });
    render(<LanguageSelector language={language} setLanguage={setLanguage} />);
    expect(screen.getByText('es-GT')).toBeInTheDocument();
    fireEvent.click(screen.getByText('es-GT'));
    expect(setLanguage).toHaveBeenCalled();
  });
});

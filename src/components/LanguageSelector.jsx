import { useState } from 'react';

const LanguageSelector = ({ language, setLanguage }) => {
  const english = 'en-US';
  const spanish = 'es-GT';
  const [buttonText, setButtonText] = useState(spanish);

  const switchLanguage = () => {
    if (language === '' || language === english) {
      setLanguage(spanish);
      console.log('entramos al if');
      setButtonText(english);
    } else {
      setLanguage(english);
      console.log('entramos al if');
      setButtonText(spanish);
    }
  };
  return (
    <>
      <nav>
        <button
          type="button"
          className="py-1 px-8 bg-indigo-600 hover:bg-indigo-700 text-white 
          font-bold  rounded-lg"
          onClick={switchLanguage}
        >
          {buttonText}
        </button>
      </nav>
    </>
  );
};

export default LanguageSelector;

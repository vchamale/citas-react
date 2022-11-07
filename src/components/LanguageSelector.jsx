const LanguageSelector = ({ language, setLanguage }) => {
  const english = 'en-US';
  const spanish = 'es-GT';

  const switchLanguage = () => {
    if (language === english) {
      setLanguage(spanish);
    } else {
      setLanguage(english);
    }
  };

  return (
    <>
      <nav data-testid="navId">
        <button
          data-testid="btnId"
          type="button"
          className="py-1 px-8 bg-indigo-600 hover:bg-indigo-700 text-white 
          font-bold  rounded-lg"
          onClick={switchLanguage}
        >
          {language === spanish ? english : spanish}
        </button>
      </nav>
    </>
  );
};

export default LanguageSelector;

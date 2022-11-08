import VetMain from './components/VetMain';
import LanguageSelector from './components/LanguageSelector';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('es-GT');

  return (
    <>
      <LanguageSelector
        data-testid="languageButton"
        language={language}
        setLanguage={setLanguage}
      />
      <VetMain language={language} />
      <Footer />
    </>
  );
}

export default App;

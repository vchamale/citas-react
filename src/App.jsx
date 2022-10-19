import VetMain from './components/VetMain';
import LanguageSelector from './components/LanguageSelector';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('');

  return (
    <>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <VetMain language={language} />
    </>
  );
}

export default App;

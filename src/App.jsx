import VetMain from './components/VetMain';
import LanguageSelector from './components/LanguageSelector';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  formLabelsServices,
  mainTitleService,
  patientCardsService
} from './reducers/pacientesUSService';

function App() {
  const [language, setLanguage] = useState('es-GT');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(formLabelsServices(language));
    dispatch(mainTitleService(language));
    dispatch(patientCardsService(language));
  }, [language]);

  return (
    <>
      <LanguageSelector
        data-testid="languageButton"
        language={language}
        setLanguage={setLanguage}
      />
      <VetMain />
      <Footer />
    </>
  );
}

export default App;

import { useEffect } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import ListadoPacientes from './ListadoPacientes';
import { useDispatch } from 'react-redux';
import { getLocalServices } from '../reducers/patientServices';

function VetMain() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocalServices());
  }, []);

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header data-testId="headerId" />
        <div className="mt-12 md:flex">
          <Formulario />
          <ListadoPacientes />
        </div>
      </div>
    </>
  );
}

export default VetMain;

import { useState, useEffect } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import ListadoPacientes from './ListadoPacientes';
import { useQuery } from '@apollo/client';
import { changeLanguage } from '../query';

function VetMain({ language }) {
  const { data, loading } = useQuery(changeLanguage(language));
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState([]);

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };
  return loading ? (
    <>Loading</>
  ) : (
    <>
      <div className="container mx-auto mt-20">
        <Header data={data} loading={loading} />
        <div className="mt-12 md:flex">
          <Formulario
            paciente={paciente}
            pacientes={pacientes}
            setPacientes={setPacientes}
            setPaciente={setPaciente}
            data={data}
          />
          <ListadoPacientes
            setPaciente={setPaciente}
            pacientes={pacientes}
            eliminarPaciente={eliminarPaciente}
            data={data}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
}

export default VetMain;

import { useState, useEffect } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import ListadoPacientes from './ListadoPacientes';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { QUERY } from '../query';
import { getLocalServices } from '../reducers/patientServices';

function VetMain({ language }) {
  const dispatch = useDispatch();
  const { data, loading } = useQuery(QUERY(language));
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState([]);

  useEffect(() => {
    dispatch(getLocalServices());
  }, []);

  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     setPacientes(pacientesLS);
  //   };
  //   obtenerLS();
  // }, []);

  // useEffect(() => {
  //   const getLS = JSON.parse(localStorage.getItem('pacientes'));
  //   console.log(getLS);
  //   //localStorage.setItem('pacientes', JSON.stringify(pacientes));
  // }, [pacientes]);

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
        <Header
          titleP1={data.mainTitleCollection.items[0].titleP1}
          titleP2={data.mainTitleCollection.items[0].titleP2}
          data-testId="headerId"
        />
        <div className="mt-12 md:flex">
          <Formulario
            paciente={paciente}
            pacientes={pacientes}
            setPacientes={setPacientes}
            setPaciente={setPaciente}
            data={data}
            titleP1={data.formLabelsCollection.items[0].titleP1}
            titleP3={data.formLabelsCollection.items[0].titleP3}
            errorMessage={data.formLabelsCollection.items[0].error}
            petName={data.formLabelsCollection.items[0].petName}
            phPetName={data.formLabelsCollection.items[0].phPetName}
            owner={data.formLabelsCollection.items[0].owner}
            phOwner={data.formLabelsCollection.items[0].phOwner}
            emailLabel={data.formLabelsCollection.items[0].email}
            phEmail={data.formLabelsCollection.items[0].phEmail}
            date={data.formLabelsCollection.items[0].date}
            symptoms={data.formLabelsCollection.items[0].symptoms}
            phSymptoms={data.formLabelsCollection.items[0].phSymptoms}
            editPatient={data.formLabelsCollection.items[0].editPatient}
            addPatient={data.formLabelsCollection.items[0].addPatient}
          />
          <ListadoPacientes
            setPaciente={setPaciente}
            pacientes={pacientes}
            eliminarPaciente={eliminarPaciente}
            titleP1={data.patientCardsCollection.items[0].titleP1}
            titleP2={data.patientCardsCollection.items[0].titleP2}
            titleP3={data.patientCardsCollection.items[0].titleP3}
            petName={data.formLabelsCollection.items[0].petName}
            owner={data.formLabelsCollection.items[0].owner}
            emailLabel={data.formLabelsCollection.items[0].email}
            date={data.formLabelsCollection.items[0].date}
            symptoms={data.formLabelsCollection.items[0].symptoms}
            editButton={data.patientCardsCollection.items[0].editButton}
            deleteButton={data.patientCardsCollection.items[0].deleteButton}
            titleP1Empty={data.patientCardsCollection.items[0].titleP1Empty}
            titleP2Empty={data.patientCardsCollection.items[0].titleP2Empty}
            titleP3Empty={data.patientCardsCollection.items[0].titleP3Empty}
          />
        </div>
      </div>
    </>
  );
}

export default VetMain;

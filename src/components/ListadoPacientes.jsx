import Paciente from './Paciente';
import { useSelector, useDispatch } from 'react-redux';
import { patientActions } from '../reducers/paciente';
import { deletePatientServices } from '../reducers/patientServices';

function ListadoPacientes({
  pacientes,
  setPaciente,
  eliminarPaciente,
  titleP1,
  titleP2,
  titleP3,
  petName,
  owner,
  emailLabel,
  date,
  symptoms,
  editButton,
  deleteButton,
  titleP1Empty,
  titleP2Empty,
  titleP3Empty
}) {
  const dispatch = useDispatch();
  const { pacientesRedux } = useSelector((state) => state.pacienteStore);

  const editarPaciente = (data) => {
    dispatch(patientActions.patientToEdit(data));
  };

  const eliminarPaciente2 = (data) => {
    dispatch(deletePatientServices(data));
  };

  return (
    <div className="md:w-1/2 lg:m-3/5 md:h-screen overflow-y-scroll">
      {pacientesRedux.length > 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">{titleP1}</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            {titleP2} {''}
            <span className="text-indigo-600 font-bold ">{titleP3}</span>
          </p>
          {pacientesRedux.map((paciente) => (
            <Paciente
              key={paciente.id}
              editarPaciente={editarPaciente}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
              eliminarPaciente2={eliminarPaciente2}
              petName={petName}
              owner={owner}
              emailLabel={emailLabel}
              date={date}
              symptoms={symptoms}
              editButton={editButton}
              deleteButton={deleteButton}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">{titleP1Empty}</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            {titleP2Empty} {''}
            <span className="text-indigo-600 font-bold ">{titleP3Empty}</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;

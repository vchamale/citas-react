import Paciente from './Paciente';
import { useSelector, useDispatch } from 'react-redux';
import { patientActions } from '../reducers/paciente';
import { deletePatientServices } from '../reducers/patientServices';

function ListadoPacientes() {
  const dispatch = useDispatch();
  const { pacientesRedux } = useSelector((state) => state.pacienteStore);
  const {
    patientCardsCollection: {
      titleP1,
      titleP2,
      titleP3,
      titleP1Empty,
      titleP2Empty,
      titleP3Empty
    }
  } = useSelector((state) => state.pacienteUIStore);

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
              eliminarPaciente2={eliminarPaciente2}
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

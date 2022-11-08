import { useSelector } from 'react-redux';

const Paciente = ({ editarPaciente, paciente, eliminarPaciente2 }) => {
  const { nombre, propietario, email, fecha, sintomas } = paciente;
  const {
    formLabelCollection: { petName, owner, email: emailLabel, date, symptoms }
  } = useSelector((state) => state.pacienteUIStore);

  const {
    patientCardsCollection: { editButton, deleteButton }
  } = useSelector((state) => state.pacienteUIStore);

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?');
    if (respuesta) {
      eliminarPaciente2(paciente);
    }
  };

  return (
    <div
      data-testid="patientDiv"
      className="mx-5 my-10 bg-white m-3 shadow-md px-5 py-10 rounded-xl"
    >
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {petName} {''}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {owner} {''}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {emailLabel} {''}
        {''}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {date} {''}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {symptoms} {''}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white 
          font-bold uppercase rounded-lg"
          onClick={() => editarPaciente(paciente)}
        >
          {editButton}{' '}
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white 
          font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          {deleteButton}{' '}
        </button>
      </div>
    </div>
  );
};

export default Paciente;

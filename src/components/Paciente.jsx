const Paciente = ({
  paciente,
  setPaciente,
  eliminarPaciente,
  data,
  contentful
}) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?');

    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  return (
    <div className="mx-5 my-10 bg-white m-3 shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {data.formLabelsCollection.items[0].petName} {''}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {data.formLabelsCollection.items[0].owner} {''}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {data.formLabelsCollection.items[0].email}
        {''}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {data.formLabelsCollection.items[0].date} {''}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {data.formLabelsCollection.items[0].symptoms} {''}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white 
          font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          {contentful.patientCardsCollection.items[0].editButton}{' '}
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white 
          font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          {contentful.patientCardsCollection.items[0].deleteButton}{' '}
        </button>
      </div>
    </div>
  );
};

export default Paciente;

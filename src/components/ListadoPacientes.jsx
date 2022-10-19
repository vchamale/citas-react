import Paciente from './Paciente';

function ListadoPacientes({
  pacientes,
  setPaciente,
  eliminarPaciente,
  data,
  loading
}) {
  return loading ? (
    <>Loading...</>
  ) : (
    <div className="md:w-1/2 lg:m-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            {data.patientCardsCollection.items[0].titleP1}
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            {data.patientCardsCollection.items[0].titleP2} {''}
            <span className="text-indigo-600 font-bold ">
              {data.patientCardsCollection.items[0].titleP3}
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
              data={data}
              loading={loading}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            {data.patientCardsCollection.items[0].titleP1Empty}
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            {data.patientCardsCollection.items[0].titleP2Empty} {''}
            <span className="text-indigo-600 font-bold ">
              {data.patientCardsCollection.items[0].titleP3Empty}
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;

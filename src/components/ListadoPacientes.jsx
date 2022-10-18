import Paciente from './Paciente';
import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
  query patientCards {
    patientCardsCollection {
      items {
        titleP1Empty
        titleP2Empty
        titleP3Empty
        titleP1
        titleP2
        titleP3
        editButton
        deleteButton
      }
    }
  }
`;

function ListadoPacientes({
  pacientes,
  setPaciente,
  eliminarPaciente,
  data,
  loading
}) {
  const { data: contentful, loading: loading2 } = useQuery(QUERY);
  return loading2 ? (
    <>Loading...</>
  ) : (
    <div className="md:w-1/2 lg:m-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            {contentful.patientCardsCollection.items[0].titleP1}
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            {contentful.patientCardsCollection.items[0].titleP2} {''}
            <span className="text-indigo-600 font-bold ">
              {contentful.patientCardsCollection.items[0].titleP3}
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
              data={data}
              contentful={contentful}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            {contentful.patientCardsCollection.items[0].titleP1Empty}
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            {contentful.patientCardsCollection.items[0].titleP2Empty} {''}
            <span className="text-indigo-600 font-bold ">
              {contentful.patientCardsCollection.items[0].titleP3Empty}
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;

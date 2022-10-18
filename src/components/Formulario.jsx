import { useState, useEffect } from 'react';
import Error from './Error';

function Formulario({ paciente, pacientes, setPacientes, setPaciente, data }) {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del Formulario

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true);
    } else {
      setError(false);

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      };

      if (paciente.id) {
        // Editando el Registro...
        objetoPaciente.id = paciente.id;
        // Itera sobre el array de pacientes y encuentra match de id.
        const pacientesActualizados = pacientes.map((pacienteState) =>
          pacienteState.id === paciente.id ? objetoPaciente : pacienteState
        );

        setPacientes(pacientesActualizados);
        setPaciente({}); // Limpiando paciente de memoria.
      } else {
        // Nuevo Registro...
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);
      }

      // Reiniciar Formulario
      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        {data.formLabelsCollection.items[0].titleP1}
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        {data.formLabelsCollection.items[0].titleP1} {''}
        <span className="text-indigo-600 font-bold ">
          {data.formLabelsCollection.items[0].titleP3}
        </span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>{data.formLabelsCollection.items[0].error}</p>
          </Error>
        )}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700">
            {data.formLabelsCollection.items[0].petName}
          </label>
          <input
            id="mascota"
            type="text"
            placeholder={data.formLabelsCollection.items[0].phPetName}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700">
            {data.formLabelsCollection.items[0].owner}
          </label>
          <input
            id="propietario"
            type="text"
            placeholder={data.formLabelsCollection.items[0].phOwner}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700">
            {data.formLabelsCollection.items[0].email}
          </label>
          <input
            id="email"
            type="email"
            placeholder={data.formLabelsCollection.items[0].phEmail}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700">
            {data.formLabelsCollection.items[0].date}
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700">
            {data.formLabelsCollection.items[0].symptoms}
          </label>
          <textarea
            id="phSymptomps"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            placeholder={data.formLabelsCollection.items[0].phSymptoms}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
        hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
          value={
            paciente.id
              ? data.formLabelsCollection.items[0].editPatient
              : data.formLabelsCollection.items[0].addPatient
          }
        />
      </form>
    </div>
  );
}

export default Formulario;

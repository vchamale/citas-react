import { useState, useEffect } from 'react';
import Error from './Error';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPatientService,
  editPatientServices
} from '../reducers/patientServices';

function Formulario() {
  const dispatch = useDispatch();
  const { pacienteEdit } = useSelector((state) => state.pacienteStore);
  const {
    formLabelCollection: {
      titleP1,
      titleP3,
      error: errorMessage,
      petName,
      phPetName,
      owner,
      phOwner,
      email: emailLabel,
      phEmail,
      date,
      symptoms,
      phSymptoms,
      editPatient,
      addPatient
    }
  } = useSelector((state) => state.pacienteUIStore);
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(pacienteEdit).length > 0) {
      setNombre(pacienteEdit.nombre);
      setPropietario(pacienteEdit.propietario);
      setEmail(pacienteEdit.email);
      setFecha(pacienteEdit.fecha);
      setSintomas(pacienteEdit.sintomas);
    }
  }, [pacienteEdit]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

      if (pacienteEdit.id) {
        objetoPaciente.id = pacienteEdit.id;

        dispatch(editPatientServices(objetoPaciente));
      } else {
        // Nuevo Registro...
        objetoPaciente.id = generarId();
        dispatch(addPatientService(objetoPaciente));
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
      <h2 data-testid="h2Title" className="font-black text-3xl text-center">
        {titleP1}
      </h2>

      <p data-testid="pTitle" className="text-lg mt-5 text-center mb-10">
        {titleP1} {''}
        <span className="text-indigo-600 font-bold ">{titleP3}</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error data-testId="errorId">
            <p>{errorMessage}</p>
          </Error>
        )}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700">
            {petName}
          </label>
          <input
            data-testid="petNameId"
            id="mascota"
            type="text"
            placeholder={phPetName}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700">
            {owner}
          </label>
          <input
            id="propietario"
            type="text"
            placeholder={phOwner}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700">
            {emailLabel}
          </label>
          <input
            id="email"
            type="email"
            placeholder={phEmail}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700">
            {date}
          </label>
          <input
            data-testid="fecha-alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700">
            {symptoms}
          </label>
          <textarea
            id="phSymptomps"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            placeholder={phSymptoms}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
        hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
          value={pacienteEdit.id ? editPatient : addPatient}
        />
      </form>
    </div>
  );
}

export default Formulario;

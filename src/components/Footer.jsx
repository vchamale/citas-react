import { useSelector } from 'react-redux';

function Footer() {
  const { pacientesRedux } = useSelector((state) => state.pacienteStore);

  return (
    <footer className="bg-indigo-600 text-white uppercase font-bold text-center p-3">
      Pacientes registrados: {pacientesRedux.length}
    </footer>
  );
}

export default Footer;

import { useSelector } from 'react-redux';

function Footer() {
  const { pacientesRedux } = useSelector((state) => state.pacienteStore);
  const {
    mainTitlecollection: { footer }
  } = useSelector((state) => state.pacienteUIStore);

  return (
    <footer className="bg-indigo-600 text-white uppercase font-bold text-center p-3">
      {footer} {pacientesRedux.length}
    </footer>
  );
}

export default Footer;

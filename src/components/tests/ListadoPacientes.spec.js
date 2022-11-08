/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListadoPacientes from '../ListadoPacientes';

describe('Listado Paciente Component', () => {
  const setPaciente = jest.fn(() => {});
  const eliminarPaciente = jest.fn(() => {});
  const pacientes = [
    {
      nombre: 'ChocoKrispis',
      propietario: 'Melvin',
      email: 'chocokrispis@kellogs.com',
      fecha: '08/08/2022',
      sintomas: 'Come demasiado',
      id: 'mostUnikeID1'
    }
  ];
  it('Checks initial state of component', () => {
    render(
      <ListadoPacientes
        setPaciente={setPaciente}
        pacientes={pacientes}
        eliminarPaciente={eliminarPaciente}
        titleP1={'Titulo 1'}
        titleP2={'Titulo 2'}
        titleP3={'Titulo 3'}
        petName={'Totto'}
        owner={'Victor'}
        emailLabel={'chamale.victor@gmail.com'}
        date={'08/08/2022'}
        symptoms={'Solo duerme.'}
        editButton={'Editar'}
        deleteButton={'Eliminar'}
        titleP1Empty={'No hay pacientes'}
        titleP2Empty={'Agregalos'}
        titleP3Empty={'y Administralos'}
      />
    );
    expect(screen.getByText('Titulo 1')).toBeInTheDocument();
    expect(screen.getByText('Titulo 2')).toBeInTheDocument();
    expect(screen.getByText('Titulo 3')).toBeInTheDocument();
  });
  it('Shows empty Patients List', () => {
    render(
      <ListadoPacientes
        setPaciente={setPaciente}
        pacientes={[]}
        eliminarPaciente={eliminarPaciente}
        titleP1={'Titulo 1'}
        titleP2={'Titulo 2'}
        titleP3={'Titulo 3'}
        petName={'Totto'}
        owner={'Victor'}
        emailLabel={'chamale.victor@gmail.com'}
        date={'08/08/2022'}
        symptoms={'Solo duerme.'}
        editButton={'Editar'}
        deleteButton={'Eliminar'}
        titleP1Empty={'No hay pacientes'}
        titleP2Empty={'Agregalos'}
        titleP3Empty={'y Administralos'}
      />
    );
    expect(screen.getByText('Agregalos')).toBeInTheDocument();
  });
});

/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Paciente from '../Paciente';

const paciente = {
  nombre: 'ChocoKrispis',
  propietario: 'Melvin',
  email: 'chocokrispis@kellogs.com',
  fecha: '08/08/2022',
  sintomas: 'Come demasiado',
  id: 'mostUnikeID1'
};

const setPaciente = jest.fn(() => {});
const eliminarPaciente = jest.fn(() => {});
global.confirm = jest.fn(() => true);

describe('Paciente', () => {
  it('Loads patient', () => {
    render(
      <Paciente
        paciente={paciente}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        petName="Nombre Mascota:"
        owner="Nombre Propietario:"
        emailLabel="Correo Electrónico:"
        date="Fecha de alta:"
        symptoms="Síntomas"
        editButton="Editar"
        deleteButton="Eliminar"
      />
    );
    expect(screen.getByText('Nombre Mascota:')).toBeInTheDocument();
    expect(screen.getByText('Nombre Propietario:')).toBeInTheDocument();
    expect(screen.getByText('Correo Electrónico:')).toBeInTheDocument();
    expect(screen.getByText('Fecha de alta:')).toBeInTheDocument();
    expect(screen.getByText('Síntomas')).toBeInTheDocument();
    expect(screen.getByText('Editar')).toBeInTheDocument();
    expect(screen.getByText('Eliminar')).toBeInTheDocument();
  });
  it('Deletes patient', () => {
    render(
      <Paciente
        paciente={paciente}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        petName="Nombre Mascota:"
        owner="Nombre Propietario:"
        emailLabel="Correo Electrónico:"
        date="Fecha de alta:"
        symptoms="Síntomas"
        editButton="Editar"
        deleteButton="Eliminar"
      />
    );
    const deletePatient = screen.getByText('Eliminar');
    fireEvent.click(deletePatient);
    expect(eliminarPaciente).toHaveBeenCalled();
  });
});

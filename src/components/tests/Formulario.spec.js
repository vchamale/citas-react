/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Formulario from '../Formulario';

describe('Paciente', () => {
  const paciente = {
    nombre: 'ChocoKrispis',
    propietario: 'Melvin',
    email: 'chocokrispis@kellogs.com',
    fecha: '08/08/2022',
    sintomas: 'Come demasiado',
    id: 'mostUnikeID1'
  };
  const pacientes = [{}];

  const handleSubmit = jest.fn(() => {});

  it('Loads Form', () => {
    render(<Formulario />);
    expect(screen.getByTestId('h2Title')).toBeInTheDocument();
    expect(screen.getByTestId('pTitle')).toBeInTheDocument();
    expect(screen.getByText('Nombre Mascota:')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Nombre de la Mascota')
    ).toBeInTheDocument();
    expect(screen.getByText('Propietario:')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Nombre Propietario')
    ).toBeInTheDocument();
    expect(screen.getByText('Correo Electrónico:')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Correo Electrónico')
    ).toBeInTheDocument();
    expect(screen.getByText('Fecha de Alta:')).toBeInTheDocument();
    expect(screen.getByText('Síntomas:')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Síntomas')).toBeInTheDocument();
    expect(screen.getByText('Editar')).toBeInTheDocument();
  });
  it('Error message pops up when empty fields', () => {
    render(<Formulario />);
    fireEvent.click(screen.getByText('Agregar'));
    expect(screen.getByText('Campos requeridos')).toBeInTheDocument();
  });
  it('Successfully Adds a new Patient', () => {
    render(<Formulario />);

    fireEvent.change(screen.getByTestId('petNameId'), {
      target: { value: 'buenassss' }
    });
    fireEvent.change(screen.getByPlaceholderText('Nombre Propietario'), {
      target: { value: paciente.propietario }
    });
    fireEvent.change(screen.getByPlaceholderText('Correo Electrónico'), {
      target: { value: paciente.email }
    });
    fireEvent.change(screen.getByTestId('fecha-alta'), {
      target: { value: paciente.fecha }
    });
    fireEvent.change(screen.getByPlaceholderText('Síntomas'), {
      target: { value: paciente.sintomas }
    });
    fireEvent.click(screen.getByText('Agregar'));
    expect(pacientes.length).not.toBe(0);
    expect(handleSubmit).toHaveBeenCalled();
  });
});

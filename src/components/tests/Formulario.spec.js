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
  const pacientes = [
    {
      // nombre: 'ChocoKrispis',
      // propietario: 'Melvin',
      // email: 'chocokrispis@kellogs.com',
      // fecha: '08/08/2022',
      // sintomas: 'Come demasiado',
      // id: 'mostUnikeID1'
    }
  ];
  const setPaciente = jest.fn(() => {});
  const setPacientes = jest.fn(() => {});
  // const generarId = jest.fn(() => {});
  const handleSubmit = jest.fn(() => {});

  it('Loads Form', () => {
    render(
      <Formulario
        paciente={paciente}
        pacientes={pacientes}
        setPacientes={setPacientes}
        setPaciente={setPaciente}
        titleP1={'Seguimiento Pacientes'}
        titleP2={'Adminístralos'}
        errorMessage={'Campos requeridos'}
        petName={'Nombre Mascota: '}
        phPetName={'Nombre de la Mascota'}
        owner={'Propietario: '}
        phOwner={'Nombre Propietario'}
        emailLabel={'Correo Electrónico: '}
        phEmail={'Correo Electrónico'}
        date={'Fecha de Alta:'}
        symptoms={'Síntomas: '}
        phSymptoms={'Síntomas'}
        editPatient={'Editar'}
        addPatient={'Agregar'}
      />
    );
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
    render(
      <Formulario
        paciente={{}}
        pacientes={[]}
        setPacientes={setPacientes}
        setPaciente={setPaciente}
        titleP1={'Seguimiento Pacientes'}
        titleP2={'Adminístralos'}
        errorMessage={'Campos requeridos'}
        petName={'Nombre Mascota: '}
        phPetName={'Nombre de la Mascota'}
        owner={'Propietario: '}
        phOwner={'Nombre Propietario'}
        emailLabel={'Correo Electrónico: '}
        phEmail={'Correo Electrónico'}
        date={'2020-05-12'}
        symptoms={'Síntomas: '}
        phSymptoms={'Síntomas'}
        editPatient={'Editar'}
        addPatient={'Agregar'}
      />
    );
    fireEvent.click(screen.getByText('Agregar'));
    expect(screen.getByText('Campos requeridos')).toBeInTheDocument();
  });
  it('Successfully Adds a new Patient', () => {
    render(
      <Formulario
        paciente={{}}
        pacientes={[]}
        setPacientes={setPacientes}
        setPaciente={setPaciente}
        titleP1={'Seguimiento Pacientes'}
        titleP2={'Adminístralos'}
        errorMessage={'Campos requeridos'}
        petName={'Nombre Mascota: '}
        phPetName={'Nombre de la Mascota'}
        owner={'Propietario: '}
        phOwner={'Nombre Propietario'}
        emailLabel={'Correo Electrónico: '}
        phEmail={'Correo Electrónico'}
        date={'Fecha de Alta:'}
        symptoms={'Síntomas: '}
        phSymptoms={'Síntomas'}
        editPatient={'Editar'}
        addPatient={'Agregar'}
      />
    );

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

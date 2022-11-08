/* eslint-disable no-undef */
import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Paciente from '../Paciente';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const paciente = {
  nombre: 'ChocoKrispis',
  propietario: 'Melvin',
  email: 'chocokrispis@kellogs.com',
  fecha: '08/08/2022',
  sintomas: 'Come demasiado',
  id: 'mostUnikeID1'
};

const eliminarPaciente2 = jest.fn(() => {});
const handleEliminar = jest.fn(() => {});
const editarPaciente = jest.fn((data) => {});
global.confirm = jest.fn(() => true);

const myRender = () => {
  <Provider store={store}>
    <Paciente
      key={paciente.id}
      editarPaciente={editarPaciente}
      paciente={paciente}
      eliminarPaciente2={eliminarPaciente2}
    />
  </Provider>;
};

describe('Paciente', () => {
  it('Loads patient', () => {
    myRender();
  });
});

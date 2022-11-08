import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pacientesRedux: [],
  pacienteEdit: {},
  languageCode: 'es-GT',
  pacienteDelete: {}
};

export const pacienteSlice = createSlice({
  name: 'pacienteSlice',
  initialState,
  reducers: {
    getAllPatientActions(state, action) {
      state.pacientesRedux = action.payload;
    },
    addPatient(state, action) {
      state.pacientesRedux = [...state.pacientesRedux, action.payload];
    },
    patientToEdit(state, action) {
      state.pacienteEdit = action.payload;
    },
    patientEditSuccess(state, action) {
      state.pacientesRedux = state.pacientesRedux.map((paciente) =>
        paciente.id === action.payload.id ? action.payload : paciente
      );
    },
    deletePatientSuccess(state, action) {
      state.pacientesRedux = state.pacientesRedux.filter(
        (patient) => patient.id !== action.payload.id
      );
    }
  }
});

export const patientActions = pacienteSlice.actions;

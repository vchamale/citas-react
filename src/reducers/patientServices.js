import { createAsyncThunk } from '@reduxjs/toolkit';
import { patientActions } from './paciente';

export const getLocalServices = createAsyncThunk(
  'getLocalServices',
  async (data, thunkApi) => {
    try {
      const patients = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      thunkApi.dispatch(patientActions.getAllPatientActions(patients));
    } catch (error) {
      console.log(error);
    }
  }
);

export const addPatientService = createAsyncThunk(
  'addPatientSerivce',
  async (data, thunkApi) => {
    try {
      const patients = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      const newPatients = [...patients, data];
      localStorage.setItem('pacientes', JSON.stringify(newPatients));
      thunkApi.dispatch(patientActions.addPatient(data));
    } catch (error) {
      console.log(error);
    }
  }
);

export const editPatientServices = createAsyncThunk(
  'editPatientServices',
  async (data, thunkApi) => {
    try {
      const patients = JSON.parse(localStorage.getItem('pacientes'));
      const index = patients.findIndex((paciente) => paciente.id === data.id);
      patients.splice(index, 1);
      const nuevosPacientes = patients.concat(data);
      localStorage.setItem('pacientes', JSON.stringify(nuevosPacientes));
      thunkApi.dispatch(patientActions.patientEditSuccess(data));
      thunkApi.dispatch(patientActions.patientToEdit({}));
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePatientServices = createAsyncThunk(
  'deletePatientServices',
  async (data, thunkApi) => {
    try {
      const patients = JSON.parse(localStorage.getItem('pacientes'));
      const index = patients.findIndex((paciente) => paciente.id === data.id);
      patients.splice(index, 1);
      localStorage.setItem('pacientes', JSON.stringify(patients));
      thunkApi.dispatch(patientActions.deletePatientSuccess(data));
    } catch (error) {
      console.log(error);
    }
  }
);

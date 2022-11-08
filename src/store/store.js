import { configureStore } from '@reduxjs/toolkit';
import { pacienteSlice } from '../reducers/paciente';
import { pacienteUISlice } from '../reducers/pacientesUISlice';

export const store = configureStore({
  reducer: {
    pacienteStore: pacienteSlice.reducer,
    pacienteUIStore: pacienteUISlice.reducer
  }
});

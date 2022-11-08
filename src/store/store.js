import { configureStore } from '@reduxjs/toolkit';
import { pacienteSlice } from '../reducers/paciente';

export const store = configureStore({
  reducer: {
    pacienteStore: pacienteSlice.reducer
  }
});

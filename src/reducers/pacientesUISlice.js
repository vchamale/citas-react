import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formLabelCollection: {},
  mainTitlecollection: {},
  patientCardsCollection: {}
};

export const pacienteUISlice = createSlice({
  name: 'pacienteUISlice',
  initialState,
  reducers: {
    importDataSuccess(state, action) {
      state.formLabelCollection = action.payload;
    },
    importTitleSuccess(state, action) {
      state.mainTitlecollection = action.payload;
    },
    importPatientCardsSuccess(state, action) {
      state.patientCardsCollection = action.payload;
    }
  }
});

export const pacienteUISliceActions = pacienteUISlice.actions;

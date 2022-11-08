import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../components/config/config';
import { pacienteUISliceActions } from './pacientesUISlice';

export const formLabelsServices = createAsyncThunk(
  'formLabelsServices',
  async (data, thunkApi) => {
    try {
      const result = await client.getEntries({
        content_type: 'formLabels',
        locale: data
      });
      thunkApi.dispatch(
        pacienteUISliceActions.importDataSuccess(result?.items[0]?.fields)
      );
    } catch (error) {
      console.log(error);
    }
  }
);

export const mainTitleService = createAsyncThunk(
  'mainTitleService',
  async (data, thunkApi) => {
    try {
      const result = await client.getEntries({
        content_type: 'mainTitle',
        locale: data
      });
      thunkApi.dispatch(
        pacienteUISliceActions.importTitleSuccess(result?.items[0]?.fields)
      );
    } catch (error) {
      console.log(error);
    }
  }
);

export const patientCardsService = createAsyncThunk(
  'patientCardsService',
  async (data, thunkApi) => {
    try {
      const result = await client.getEntries({
        content_type: 'patientCards',
        locale: data
      });
      thunkApi.dispatch(
        pacienteUISliceActions.importPatientCardsSuccess(
          result?.items[0]?.fields
        )
      );
    } catch (error) {
      console.log(error);
    }
  }
);

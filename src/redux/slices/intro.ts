import { requests } from '@/utils/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: Api.IntroResponse = {
   title: '',
   avatar: '',
   benefit_1: '',
   benefit_2: '',
   description: '',
};

export const getIntro = createAsyncThunk('getIntro', requests.getIntro);

const introSlice = createSlice({
   name: 'intro',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getIntro.fulfilled, (state, action) => {
         state = action.payload.data;
      });
   },
});

export const introReducer = introSlice.reducer;

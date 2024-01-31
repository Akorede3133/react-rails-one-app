import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  greeting: '',
  loading: false,
  error: ''
};

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async() => {
  try {
    const response = await fetch('/api/v1/greetings');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error)
  }
})

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGreetings.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.greeting = action.payload;
        state.loading = false;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export default greetingsSlice.reducer;
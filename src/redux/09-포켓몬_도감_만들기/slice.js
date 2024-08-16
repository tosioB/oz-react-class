import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplepokemonById } from "./thunk";

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: [],
    loading: true,
  },
  reducers: {}, // 동기적 상태 변경
  extraReducers: (builder) => { // 비동기적 상태 변경
    builder
      .addCase(fetchMultiplepokemonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMultiplepokemonById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchMultiplepokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
  }
})
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import type {PayloadAction} from '@reduxjs/toolkit';

export type pokemonTypes = {
  name: string;
  url: String;
};

export type State = {
  pokemons: pokemonTypes[];
  loading: boolean;
};

const userAPI = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemons = createAsyncThunk('Pokemons/fetchAll', async () => {
  const params = {
    params: {
      offset: 9,
      limit: 9,
    },
  };
  const response = await axios.get(userAPI, {
    params: params,
  });
  return response.data.results;
});

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: [],
    loading: true,
  } as State,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchPokemons.fulfilled,
        (state, action: PayloadAction<pokemonTypes>) => {
          state.pokemons = [...(action.payload as unknown as pokemonTypes[])];
          state.loading = false;
        },
      )
      .addCase(fetchPokemons.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPokemons.rejected, state => {
        state.loading = false;
      });
  },
});

export default pokemonsSlice.reducer;

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import type {PayloadAction} from '@reduxjs/toolkit';

export type typesPokemonProps = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type abilitiesProps = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type pokemonDetailsTypes = {
  id: string;
  height: number;
  weight: number;
  types: typesPokemonProps[];
  abilities: abilitiesProps[];
};

export type State = {
  detailsPokem: pokemonDetailsTypes;
  loading: boolean;
};

export const fetchDetailsPokemons = createAsyncThunk(
  'details/fetchAll',
  async (url: string) => {
    const response = await axios.get(url, {});
    return response.data;
  },
);

const detailsPokemonsSlice = createSlice({
  name: 'detailsPokemon',
  initialState: {
    detailsPokem: {},
    loading: true,
  } as State,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchDetailsPokemons.fulfilled,
        (state, action: PayloadAction<pokemonDetailsTypes>) => {
          state.detailsPokem = action.payload;
          state.loading = false;
        },
      )
      .addCase(fetchDetailsPokemons.pending, state => {
        state.loading = false;
      })
      .addCase(fetchDetailsPokemons.rejected, state => {
        state.loading = false;
      });
  },
});

export default detailsPokemonsSlice.reducer;

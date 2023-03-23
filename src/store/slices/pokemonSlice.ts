import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../types/pokemon.types";

export interface PokemonState {
	name: string;
	pokemonSelected: Pokemon;
	pokemons: Pokemon[];
}

const initialState: PokemonState = {
	name: "",
	pokemonSelected: {
		name: "snorlax",
		url: "https://pokeapi.co/api/v2/pokemon/126/",
	},
	pokemons: [],
};

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		setPokemonName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		setPokemonSelected: (state, action: PayloadAction<Pokemon>) => {
			state.pokemonSelected = action.payload;
		},
		setPokemons: (state, action: PayloadAction<Pokemon[]>) => {
			state.pokemons = action.payload;
		},
	},
});

export const { setPokemonName, setPokemonSelected } = pokemonSlice.actions;

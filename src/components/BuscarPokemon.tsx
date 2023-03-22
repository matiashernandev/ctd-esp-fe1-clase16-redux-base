import React, { useState } from "react";
import { Pokemon } from "../types/pokemon.types";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";

const BuscarPokemon = () => {
	//Aqui deberemos almacenar en estados las entradas del usuario
	const [inputPokemonName, setInputPokemonName] = useState("");
	const [name, setName] = useState("");
	const [pokemonSeleccionado, setPokemonSeleccionado] = useState<
		Pokemon | undefined
	>();

	const onBuscarClick = () => {
		// Aqui debemos guardar la entrada del usuario
		setName(inputPokemonName);
		console.log(inputPokemonName);
	};

	const seleccionarPokemon = (pokemon: Pokemon) => {
		setPokemonSeleccionado(pokemon);
	};

	return (
		<>
			<div id="buscarPokemon">
				<label>Buscar pokemon</label>
				<input
					onChange={(e) => {
						setInputPokemonName(e.target.value);
					}}
					type="text"
					placeholder={"Pikachu, Charmander, Ditto, etc"}
				/>
				<button onClick={() => onBuscarClick()}>Buscar</button>
			</div>
			<div style={{ display: "flex", flexDirection: "row" }}>
				{/* ListadoPokemons debe recibir por props el name del pokemon a buscar */}
				<ListadoPokemons name={name} seleccionarPokemon={seleccionarPokemon} />
				<VistaPokemon pokemonSeleccionado={pokemonSeleccionado} />
			</div>
		</>
	);
};

export default BuscarPokemon;

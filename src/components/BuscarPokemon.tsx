import React, { useState } from "react";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";

const BuscarPokemon = () => {
	//Aqui deberemos almacenar en estados las entradas del usuario
	useState;

	const onBuscarClick = () => {
		// Aqui debemos guardar la entrada del usuario
	};

	return (
		<>
			<div id="buscarPokemon">
				<label>Buscar pokemon</label>
				<input type="text" placeholder={"Pikachu, Charmander, Ditto, etc"} />
				<button onClick={() => onBuscarClick()}>Buscar</button>
			</div>
			<div style={{ display: "flex", flexDirection: "row" }}>
				{/* ListadoPokemons debe recibir por props el name del pokemon a buscar */}
				<ListadoPokemons />
				<VistaPokemon />
			</div>
		</>
	);
};

export default BuscarPokemon;

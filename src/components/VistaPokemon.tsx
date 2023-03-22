import React from "react";
import PropTypes from "prop-types";
import { Pokemon, PokemonWithProps } from "../types/pokemon.types";
import { Sprite } from "../types/sprite.types";

const pokemonMock: PokemonWithProps = {
	id: 4,
	name: "Charmander",
	url: "https://pokeapi.co/api/v2/pokemon/4/",
	sprites: {
		default:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
		other: {
			home: {
				front_default:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
			},
		},
	} as Sprite,
};

/**
 * Visualiza un pokemon seleccionado
 *
 * @param {string} pokemonSeleccionado pokemon almacenado con la funcion seleccionarPokemon
 * @author Digital House
 */

const VistaPokemon = ({
	pokemonSeleccionado,
}: {
	pokemonSeleccionado: Pokemon | undefined;
}) => {
	//EXTRA: Pueden manejar el proceso de vista de un pokemon seleccionado pasando por props una funcion
	//que almacene en un estado el componente seleccionado y con el name de dicho pokemon hacer el fetch dentro de este
	//componente de vista

	if (pokemonSeleccionado) {
		console.log(pokemonSeleccionado);
	}

	//TODO id + sprites

	return pokemonSeleccionado ? (
		<div className="vistaPokemon">
			<h4>Pokemon: {pokemonSeleccionado.name}</h4>
			{/* <h5>#{pokemonSeleccionado.id}</h5> */}
			<img
				// src={pokemonSeleccionado.sprites.other.home.front_default}
				alt={pokemonSeleccionado.name}
			/>
		</div>
	) : null;

	// return pokemonMock ? (
	// 	<div className="vistaPokemon">
	// 		<h4>Pokemon: {pokemonMock.name}</h4>
	// 		<h5>#{pokemonMock.id}</h5>
	// 		<img
	// 			src={pokemonMock.sprites.other.home.front_default}
	// 			alt={pokemonMock.name}
	// 		/>
	// 	</div>
	// ) : null;
};

VistaPokemon.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	}),
};

export default VistaPokemon;

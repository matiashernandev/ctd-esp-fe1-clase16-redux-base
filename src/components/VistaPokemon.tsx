import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Pokemon } from "../types/pokemon.types";

import { getPokemon } from "../queries/pokemon.queries";
import { useQuery } from "react-query";

/* const pokemonMock: PokemonWithProps = {
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
}; */

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

	/* if (pokemonSeleccionado) {
		console.log(pokemonSeleccionado);
	} */

	const { data, refetch } = useQuery(
		"queryPokemon",
		() => getPokemon(pokemonSeleccionado?.name || ""),
		{
			initialData: {
				id: 143,
				name: "Snorlax",
				url: "https://pokeapi.co/api/v2/pokemon/143/",
				sprites: {
					default:
						"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif",
					other: {
						home: {
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif",
						},
					},
				},
			},
		}
	);

	useEffect(() => {
		if (pokemonSeleccionado) {
			refetch();
		}
	}, [refetch, pokemonSeleccionado]);

	console.log(data?.sprites.other.home.front_default);

	//TODO id + sprites

	return data ? (
		<div className="vistaPokemon">
			<h4>Pokemon: {data?.name}</h4>
			{/* <h5>#{data.id}</h5> */}
			<img src={data?.sprites.other.home.front_default} alt={data.name} />
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

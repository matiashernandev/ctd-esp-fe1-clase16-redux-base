import { useEffect } from "react";

import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getPokemon } from "../queries/pokemon.queries";
import { RootState } from "../store/store";

const VistaPokemon = () => {
	const { pokemonSelected } = useSelector((state: RootState) => state.pokemon);

	const { data, refetch } = useQuery("queryPokemon", () =>
		getPokemon(pokemonSelected?.name || "")
	);

	useEffect(() => {
		if (pokemonSelected) {
			refetch();
		}
	}, [refetch, pokemonSelected]);

	if (data) {
		const gifPokemon =
			data.sprites?.versions?.["generation-v"]?.["black-white"]?.animated
				?.front_default;
		console.log(gifPokemon);
	}
	//TODO id + sprites

	return data ? (
		<div className="vistaPokemon">
			<h4>Pokemon: {data?.name}</h4>
			<h5>#{data.id}</h5>
			<img
				width={100}
				src={
					data.sprites?.versions?.["generation-v"]?.["black-white"]?.animated
						?.front_default
				}
				alt={data.name}
			/>
		</div>
	) : null;
};

export default VistaPokemon;

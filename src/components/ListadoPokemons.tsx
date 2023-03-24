import { useEffect, useState } from "react";
import ListadoPokemonsItem from "../components/ListadoPokemonsItem";
import { buscarPokemons } from "../queries/pokemon.queries";
import { extractPokemonId } from "../services/pokemon.services";
import { useAppSelector } from "../store/hooks";
import { Pokemon } from "../types/pokemon.types";

const ListadoPokemons = () => {
	const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

	//const { name } = useSelector((state: RootState) => state.pokemon);
	const { name } = useAppSelector((state) => state.pokemon);

	useEffect(() => {
		buscarPokemons(name).then((data) => {
			setPokemons(data);
		});
	}, [name]);

	return (
		<div id="listadoCategorias">
			{pokemons &&
				pokemons.map((pokemon: Pokemon) => (
					<ListadoPokemonsItem
						pokemon={pokemon}
						key={extractPokemonId(pokemon.url)}
					/>
				))}
		</div>
	);
};

export default ListadoPokemons;

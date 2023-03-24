import { extractPokemonId } from "../services/pokemon.services";
import { setPokemonSelected } from "../store/slices/pokemonSlice";
import { useAppDispatch } from "../store/store";
import { Pokemon } from "../types/pokemon.types";

interface ListadoPokemonsItemProps {
	pokemon: Pokemon;
}

const ListadoPokemonsItem = ({ pokemon }: ListadoPokemonsItemProps) => {
	const dispatch = useAppDispatch();
	const handleClick = () => {
		dispatch(setPokemonSelected(pokemon));
	};

	return (
		<div>
			<div onClick={handleClick}>
				<strong>{pokemon.name}</strong>
				<small> #{extractPokemonId(pokemon.url)}</small>
			</div>
		</div>
	);
};

export default ListadoPokemonsItem;

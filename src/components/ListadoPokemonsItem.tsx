import { useDispatch } from "react-redux";
import { extractPokemonId } from "../services/pokemon.services";
import { setPokemonSelected } from "../store/slices/pokemonSlice";
import { Pokemon } from "../types/pokemon.types";

interface ListadoPokemonsItemProps {
	pokemon: Pokemon;
}

const ListadoPokemonsItem = ({ pokemon }: ListadoPokemonsItemProps) => {
	const dispatch = useDispatch();
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

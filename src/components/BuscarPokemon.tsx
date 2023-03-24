import { useState } from "react";
import { setPokemonName } from "../store/slices/pokemonSlice";
import { useAppDispatch } from "../store/hooks";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";

const BuscarPokemon = () => {
	const [inputPokemonName, setInputPokemonName] = useState("");

	const dispatch = useAppDispatch();

	const onBuscarClick = () => {
		dispatch(setPokemonName(inputPokemonName));
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
				<ListadoPokemons />
				<VistaPokemon />
			</div>
		</>
	);
};

export default BuscarPokemon;

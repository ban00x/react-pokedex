import React, { useState } from 'react';

const CaughtPokemon = (props) => {
	const pokemons = [
		'Bulbasaur',
		'Ivysaur',
		'Venusaur',
		'Charmander',
		'Charmeleon',
		'Squirtle',
	];
	const random = Math.floor(Math.random() * pokemons.length);
	let [caught, setCaught] = useState([]);
	const [pokemonNameInput, setPokemonNameInput] = useState('');
	const catchPokemon = () => {
		setCaught(caught.concat(pokemonNameInput));
		setPokemonNameInput('');
	};
	// const handleKeyPress=(event=>{
	// 	event.key
	// })

	return (
		<div>
			<p>
				Caught {caught.length} Pokémon on {props.date}
			</p>
			<input
				type='text'
				onChange={(event) => setPokemonNameInput(event.target.value)}
				value={pokemonNameInput}
			/>
			<button onClick={catchPokemon} disabled={!pokemonNameInput}>
				catchPokemon
			</button>
			<ul>
				{caught.map((element, index) => (
					<li key={index}>{element}</li>
				))}
			</ul>
		</div>
	);
};
export default CaughtPokemon;

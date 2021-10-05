import { useState } from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import PokemonMovesSelector from './PokemonMovesSelector';
import PokemonCity from './PokemonCity';

function App() {
	let [appName, setAppName] = useState('Pokedex');

	const logWhenClicked = () => {
		setAppName('Elya');
	};
	return (
		<div>
			<Logo appName={appName} handleClick={logWhenClicked} />
			<BestPokemon abilities={['Anticipation', 'Adaptability', 'Run-Away']} />
			<CaughtPokemon date={new Date().toLocaleDateString()} />
			<PokemonMovesSelector />
			<PokemonCity />
		</div>
	);
}

export default App;

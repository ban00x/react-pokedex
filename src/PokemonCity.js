import React, { useState } from 'react';

function PokemonCity() {
	const [city, setCity] = useState('');
	const updateCity = (event) => {
		console.log(event.target.value);
		setCity(event.target.value);
	};
	return (
		<div>
			<input onChange={updateCity} type='text' value={city}></input>
			<p>Welcome to the city of {city}</p>
		</div>
	);
}

export default PokemonCity;

import React from "react";
const BestPokemon=(props)=>{
    return (<div><p>My favoourite pokemon is Snorlax</p><ul>{
        props.abilities.map((item,index)=><li key={index}>{item}</li>)}
    </ul></div>

)
}
export default BestPokemon;
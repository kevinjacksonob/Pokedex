import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./pokedex/styles/cardPokedex.css"

const Pokemon = ({url}) => {

  const [pokemon,setPokemon] = useState({});

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data));
      console.log(pokemon);
  },[])

  

  return (
    <Link className={`card-pokemon ${pokemon?.types ?  `bg-${pokemon?.types[0]?.type?.name} border-${pokemon?.types[0]?.type?.name}`:''}`} to={`/pokedex/${pokemon.id}`}>
      <h1 >{pokemon.name}</h1>      
      <img src={pokemon.sprites?.other.home.front_default} alt="" />
    </Link>
  );
};

export default Pokemon;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pokemon from "./Pokemon";
import Pagination from '../components/Pagination'
import Header from '../components/shared/Header'
import "../style/pokedex.css"
import "../components/pokedex/styles/inputSearch.css"
import "../components/pokedex/styles/selectByType.css"

const Pokedex = () => {
  const userName = useSelector((state) => state.name);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [type, setType] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154") /*?offset=0&limit=1154*/
      .then((res) => setPokemons(res.data.results));

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setType(res.data.results));
  }, []);

  

  const searchPokemon = () => {
    navigate(`/pokedex/${pokemonName.toLowerCase()}`);
  };

  const filterType = (e) => {
    axios.get(e.target.value)
      .then(res => setPokemons(res.data.pokemon));
  };

  
  const [page, setPage] = useState(1)
  const [pokerPerPage, setPokerPerPage] = useState(12)
  const initialPoke = (page - 1) * pokerPerPage
  const finalPoke = page * pokerPerPage

  return (
    <div>
      <div>
      <Header />
      </div>
      <p className='title-header'>Bienvenido {userName} <span className='title-header__span'>, Aqui encontraras a tu pokemon favorito</span></p>
      <div className='aside-header_filter'>
        
        <div className="form-control">
        <input
          className='input-search'
          type="text"
          placeholder="Buscar Pokemon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button className='btn-search' onClick={searchPokemon}>Buscar</button>
        </div>
        
        <select className='select-type' onChange={filterType} name="" id="">
          {type.map((type) => (
            <option className='option-select-type' value={type.url} key={type.name}>
              {type.name}
            </option>
          ))}
        </select>
       
        
      </div>
      <Pagination 
          page={page}
          pagesLength={ pokemons && Math.ceil(pokemons.length / pokerPerPage) }
          setPage={setPage}
        />
      <ul className='card-container'>
        {pokemons?.slice(initialPoke,finalPoke).map((pokemon) => (
          <Pokemon 
          url={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
          key={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
        ))}
      </ul>

      <Pagination 
          page={page}
          pagesLength={ pokemons && Math.ceil(pokemons.length / pokerPerPage) }
          setPage={setPage}
        />
    </div>

    
  );
};

export default Pokedex;

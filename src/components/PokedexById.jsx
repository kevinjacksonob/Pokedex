import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../components/shared/Header'
import '../style/pokemonById.css'
import Movements from '../components/pokedexId/Movements';
import Stats from '../components/pokedexId/Stats';


const PokedexById = () => {

  const {id} = useParams();

  const [ pokemon, setPokemon ] = useState()
  const [ hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
      axios.get(URL)
      .then( res => setPokemon(res.data))
      .catch( err => {
        setHasError(true);
        console.log(err)
      })
  }, [])

  if(hasError){
    return <Pokemon404 />
  }
  
  return (
    <>
      <Header />
      <article className='card-pokemon-info'>
        <header className={`card-pokemon-info__header bg-${pokemon?.types[0].type.name}`}>
          <img 
            className='card-pokemon-info__sprite'
            src={ 
            pokemon?.sprites.other['official-artwork']
            .front_default } alt=''/>
        </header>
        <section className='card-pokemon-info_body'>
          <h1 className={`card-pokemon-info__id letter-${pokemon?.types[0].type.name}`}>#{id}</h1>
          <h2 className={`card-pokemon-info__name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
          
          <ul className='card-pokemon-info__data-container'>
            <li className='card-pokemon-info__data'>
              <span className='card-pokemon-info__data-label'>Height</span>
              <span className={`card-pokemon-info__data-number`}>{pokemon?.height}</span>
            </li>
            <li className='card-pokemon-info__data'>
              <span className='card-pokemon-info__data-label'>Weight</span>
              <span className={`card-pokemon-info__data-number`}>{pokemon?.weight}</span>
            </li>
          </ul>
              
          <div className='card-pokemon-info__habilites_types'>
            <div className='card-pokemon-info__data-habilites_types'>
              <h2>Type</h2>
              <ul className='card-pokemon-info__type-container'>
                {
                  pokemon?.types.map( type => (
                    <li key={type.type.name} className={`card-pokemon-info__type bg-${type.type.name}`}>
                      {type.type.name}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h2>Abilities</h2>
              <ul className='card-pokemon-info__abilities-container'>
                {
                  pokemon?.abilities.map( ability => (
                    <li key={ability.ability.name} className='card-pokemon-info__ability'>
                      {ability.ability.name}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          <Stats stats={pokemon?.stats}/>
        
        </section>
      </article>

      <Movements moves={pokemon?.moves}/>
    </> 
  )
}

export default PokedexById
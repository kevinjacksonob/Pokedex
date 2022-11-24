import React from 'react'
import './styles/movements.css'

const Movements = ({moves}) => {
    return (
        <article className='card-pokemon-info_movements'>
            <h2 className='card-pokemon-info_movements-title'>Movements</h2>
            <ul className='card-pokemon-info_movements-container'>
            {
                moves?.map( move => (
                <li className='card-pokemon-info_move' key={move.move.name}>{move.move.name}</li>
                ))
            }
            </ul>
        </article>
    )
}

export default Movements
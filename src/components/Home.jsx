import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';
import '../style/home.css'

const Home = () => {

  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const enterName = () => {
    dispatch(changeName(userName));
    navigate('/pokedex');
  }

  return (
    <div className="pokedex">
      <img className='pokedex__img' src='/images/home/pokedex.png' alt="" />
      <header className='pokedex__header'>
        <h1 className="pokedex__subtitle">Hola Entrenador</h1>
        <div className="pokedex__form"> 
        <input 
          className="pokedex__input"
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          placeholder='Escribre tu Nombre'
        />
        <button  className="pokedex__btn" onClick={enterName}>Entrar</button>
        </div>
      </header>
    </div>
  );
};

export default Home;
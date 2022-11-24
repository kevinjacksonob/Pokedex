
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import PokedexById from './components/PokedexById'

import ProtectedRoutes from './components/ProtectedRoutes'
import Footer from './components/shared/Footer'

function App() {
  

  return (
    <div className="App">
    <HashRouter>
      
      
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element= {<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={<PokedexById/>}/>
        </Route>
        
      </Routes>
    </HashRouter>

    <Footer />
    </div>
  )
}

export default App

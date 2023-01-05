import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ pokemons, setPokemons ] = useState([])

  useEffect(() => {

    const getPokemons = async () => {
      const data = await fetch('/api/pokemons')
      const pokemonArray = await data.json()
      setPokemons(pokemonArray.pokemons)
    }
    document.title = "AWS"
    getPokemons()
    }, [])

  return (
    <div className="App">
      <span className='hello'>
        <h1>Hello AWS,</h1>
        <h2>Create a Pokemon</h2>
        <form action='/api/pokemons' method='POST' className='form'>
          <label for='name'>Name</label>
          <input type='text' name='name'/>

          <label for='level'>Level</label>
          <input type='text' name='level'/>

          <label for='type'>Type</label>
          <input type='text' name='type'/>
          
          <input type='submit' value='Submit'/>
        </form>
      </span>
      <span className='pokemon-list'>
        {pokemons.map((pokemon) => (<div key={pokemon.id} className='pokemon'>
          <h1>{pokemon.name}</h1>
          <h2>{pokemon.type}</h2>
          <h2>Lv. {pokemon.level}</h2>
        </div>
        ))}
      </span>
    </div>
  )
}

export default App

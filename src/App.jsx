import { useEffect, useState } from 'react'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import { PokemonList } from './components/PokemonList'
import { SearchBar } from './components/SearchBar'
import { useFormState } from 'react-dom'
import { PokemonDetails } from './components/PokemonDetails'


function App() {
  const [count, setCount] = useState(0)
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then((res) =>
        res.json(),
      ),
  })



  const [nomepokemon, setnomepokemon] = useState()
  const [pokemonActive, setPokemonActive] = useState()
  if (!data) return null
  let ListaPokemon = data.results;
  if (nomepokemon) {
    ListaPokemon = ListaPokemon.filter((poke) => poke.name.startsWith(nomepokemon))
  }


  return (
    <>
      <PokemonDetails nomepokemon={pokemonActive}/>
    <SearchBar ricerca={(poke) => setnomepokemon(poke)} />
     <PokemonList pokemon={ListaPokemon} pokemonActive={setPokemonActive}/>
    </>
  )
}


export default App

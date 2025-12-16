import { useState } from 'react'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import { PokemonList } from './components/PokemonList'
import { SearchBar } from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)
  const { isPending, error, data } = useQuery<{count: number, results: {name: string, url: string}[]}>({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then((res) =>
        res.json(),
      ),
  })


  console.log(data)
  if (!data) return null
  return (
    <>
    <SearchBar />
     <PokemonList pokemon={data.results}/>
    </>
  )
}

export default App

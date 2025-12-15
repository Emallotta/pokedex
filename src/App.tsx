import { useState } from 'react'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import { ListaPokemon } from './components/ListaPokemon'
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
     <ListaPokemon pokemon={data.results}/>
    </>
  )
}

export default App

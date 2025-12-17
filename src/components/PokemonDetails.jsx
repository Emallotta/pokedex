import { useQuery } from '@tanstack/react-query'
export function PokemonDetails ({nomepokemon}){
    

  const { isPending, error, data } = useQuery({
    queryKey: [nomepokemon],
    enabled: !!nomepokemon,
    queryFn: () =>
      fetch('https://pokeapi.co/api/v2/pokemon/'+nomepokemon).then((res) =>
        res.json(),
      ),
  })

  console.log(data)

  if (!data) return null
    return(
        <>
            <div>{data?.name}</div>
            <img src={data.sprites.front_default}></img>
        </>
    )

}

export function PokemonList({pokemon, pokemonActive}){

    return(
        <>
            {pokemon.map((poke) => {
                return <div onClick={() => pokemonActive(poke.name)}>{poke.name}</div>
            })}
        </>
    )

}
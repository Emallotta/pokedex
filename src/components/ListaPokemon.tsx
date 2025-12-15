export function ListaPokemon({pokemon}: {pokemon: {name: string, url: string}[]}){

    return(
        <>
            {pokemon.map((poke) => {
                return <div>{poke.name}</div>
            })}
        </>
    )

}
import { api } from "~/composables/fetchPokemon"
import { PokemonList } from "~/model/pokemon/pokemon"

export default defineEventHandler(async (event) => {
    const { name } = getRouterParams(event)
    const uri = `https://pokeapi.co/api/v2/pokemon/${name}`
    return api.get<PokemonList>(uri)
})

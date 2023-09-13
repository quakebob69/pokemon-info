import { api } from "~/composables/fetchPokemon"
import { PokemonList } from "~/model/pokemon/pokemon"

export default defineEventHandler(async (event) => {
  const uri = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=60`
  return api.get<PokemonList>(uri)
})
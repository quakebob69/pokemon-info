export function capitalize(str: String) {
  const lower = str.toLowerCase()
  return str.charAt(0).toLocaleUpperCase() + lower.slice(1)
}

export function getPokemonIdFromApiUrl(str: String) {
  const array1 = str.split("https://pokeapi.co/api/v2/pokemon/");
  const array2 = array1[1].split("/");
  return array2[0]
}

export function getPokemonImgSrcFromApiUrl(str: String) {
  let apiUrlTemplate = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/[id].png"
  let id = getPokemonIdFromApiUrl(str)
  return apiUrlTemplate.replace("[id]", id)
}

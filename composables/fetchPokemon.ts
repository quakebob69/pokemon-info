export const api = {
  get: <PokemonList>(url: string) =>
    request<PokemonList>(url),
  post: <TBody extends BodyInit, PokemonList>(url: string, body: TBody) =>
    request<PokemonList>(url, { method: 'POST', body }),
}

export function request<Pokemon>(
  url: string,
  config: RequestInit = {}
): Promise<Pokemon> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as Pokemon)
    .catch(error => {
    });
}

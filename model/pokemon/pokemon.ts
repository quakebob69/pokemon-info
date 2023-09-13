import {
  NamedAPIResource
} from "../common/resource"

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  abilities_csv: string | null;
  sprites: PokemonSprites;
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export interface PokemonSprites {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  other?: OtherPokemonSprites;
}

export interface OtherPokemonSprites {
  home: Home;
  dream_world: DreamWorld;
}

export interface Home {
  front_shiny: string | null;
}

export interface DreamWorld {
  front_default: string | null;
}

export interface PokemonList {
  count: number;
  results: NamedAPIResource[];
}

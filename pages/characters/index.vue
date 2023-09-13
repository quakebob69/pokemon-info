<template>
  <div style="padding: 25px">
    <input type="text" v-model="searchValue" placeholder="Filter Pokemon List">
  </div>
  <div style="padding: 0px 0px 0px 50px ">
    <ul>
      <div v-for="pokemen in filteredPokemen">
        <CharacterCard :pokemen="pokemen" />
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { PokemonList } from "~/model/pokemon/pokemon"
const pokemen: PokemonList = await api.get<PokemonList>('/api/pokemon/pokemon');

export default {
  data() {
    return {
      searchValue: '',
      pokemen: pokemen.results
    };
  },
  computed: {
    filteredPokemen() {
      let tempPokemen = this.pokemen
      tempPokemen.forEach(function (item, index) {
        item.imgSrc = getPokemonImgSrcFromApiUrl(item.url)
      });

      if (this.searchValue != '' && this.searchValue) {
        tempPokemen = tempPokemen.filter((item) => {
          return item.name
            .toUpperCase()
            .includes(this.searchValue.toUpperCase())
        })
      }

      return tempPokemen
    }
  }
};
</script>

<style>
@import url("~/assets/css/pokemoninfo.css");
</style>

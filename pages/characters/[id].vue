<template>
  <div>
    <CharacterDetails :character="character" />
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params
const uri = '/api/pokemon/' + id
const { data: character } = useFetch(uri)
</script>

<style>
@import url("~/assets/css/pokemoninfo.css");
</style>
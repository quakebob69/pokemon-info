<template>
  <div>
    <a :href="`/characters/${pokemen.name}`">
      <li>
        <p> {{ capitalize(pokemen.name) }}</p>
        <img :src="`${pokemen.imgSrc}`" />
      </li>
    </a>
  </div>
</template>
  
<script setup lang="ts">
const { pokemen: PokemonList } = defineProps(['pokemen'])
</script>
  
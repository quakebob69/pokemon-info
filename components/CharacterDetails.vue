<template>
  <div style="padding: 25px">
    <a href="/characters">Back to Character List</a>
  </div>
  <div class="details">
    <div class="container">
      <h1>{{ capitalize(character?.name) }}</h1>
    </div>
    <div class="avatar">
      <img :src="`${character?.sprites.other?.dream_world.front_default}`" alt="Avatar" style="width:100%;">
    </div>
    <div class="container">
      <p>Height <span class="promo">{{ character?.height }}</span></p>
      <p>Weight <span class="promo">{{ character?.weight }}</span></p>
      <p>Abilities <span class="promo">{{ character.abilities.map((item) => capitalize(item.ability.name)).flat().join(', ') }}</span></p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { character } = defineProps(['character'])
</script>

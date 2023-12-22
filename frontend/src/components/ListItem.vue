<script setup>

import Item from "@/components/Item.vue";

import {onMounted, defineProps, computed } from "vue";

const liste = defineProps({
  recipes: Array
});

const list = computed(() => {
  return liste;
});

console.log(list.recipes);

onMounted(() => {
  console.log(list.recipes);
  console.log(list.recipes);
});

</script>

<template>
  <div class="liste">
    <h2 class="titreListe" v-if="list.recipes">Les recettes : </h2>

    <Item class="items" v-if="list.recipes" v-for="item in list.recipes.value" :item="item" />

  </div>
</template>

<style scoped>
  .items {
    margin: 5px;
  }

  .liste {
    display: flex;
    flex-direction: column;
    margin: 1em;
    align-items: center;
  }

  .titreListe {
    text-align: center;
  }
</style>
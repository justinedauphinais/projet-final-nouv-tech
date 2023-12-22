<script setup>

import HomeItem from "@/components/HomeItem.vue";

import {onMounted, defineProps, computed } from "vue";

const liste = defineProps({
  recipes: Array
});

const list = computed(() => {
  return liste;
});

onMounted(() => {

});

</script>

<template>
  <div class="liste">
    <HomeItem class="items" v-if="list.recipes" v-for="item in list.recipes.value" :item="item" />
    <HomeItem class="items" v-if="list.recipes" v-for="item in list.recipes.value" :item="item" />
    <HomeItem class="items" v-if="list.recipes" v-for="item in list.recipes.value" :item="item" />
  </div>
</template>

<style scoped>
  .liste {
    display: flex;
    gap: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    width: 100%;
    padding-bottom: 0.5em;
  }
</style>
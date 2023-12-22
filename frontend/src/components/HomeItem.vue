<script setup>
import {onMounted, defineProps, computed} from "vue";

const recette = defineProps(['item']);

const item = computed(() => {
  return recette.item;

});

</script>

<template>

  <div  class="item parent">
    <div class="div1">
      <img class="imageItem" :src="item.image" alt="image">
    </div>
    <div class="div2">
        <p>{{item.categorie_nom}} </p>
    </div>
    <div class="div3">
        <h3 class="titreRecette"> {{item.recette_nom}} </h3>
    </div>
    <div class="div4">
        <div>
            <img src="./icons/clock.png" >
            <p>{{item.temps}}m</p>
        </div>
        <router-link v-if="item.id" :to="{ name: 'recette', params: { id: item.id } }">Voir</router-link>
    </div>
  </div>
</template>

<style scoped>
  .item {
    background-color: #2d2d2d;
    border-radius: 10px;
    padding: 0.5em ;
    color: white;
    height: 225px;
    width: 250px;
    min-width: 250px;
  }

  .div1 {
    width: 200px;
    height: 100px;
  }

  .imageItem {
    width: calc(250px - 1em);
    height: calc(250px / 2 - 1em);
    border-radius: 10px;
  }

  .div2 {
    position: relative;
    background-color: var(--color-background);
    border-radius: 25px;
    padding: 0.5em 1em;
    margin: -0.5em 0 0 1em;
    width: 125px;
  }

  .div3 {
    margin-top: 0.5em;
    margin-left: 0.5em;
  }

  .div4 {
    margin-top: 0.5em;
    margin-left: 0.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .div4 a {
    background-color: #599883;
    color: white;
    border-radius: 10px;
    padding: 0.15em 1.5em;
  }

  .div4 a:hover {
    background-color: #00BD7E;
  }

  .div4 div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .div4 img {
    width: 30px;
  }
</style>
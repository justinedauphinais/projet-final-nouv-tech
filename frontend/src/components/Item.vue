<script setup>
import {onMounted, defineProps, computed} from "vue";

const recette = defineProps(['item']);

const item = computed(() => {
  console.log(recette.item);
  return recette.item;
});

console.log(recette.item);

</script>

<template>

  <div  class="item parent">
    <div class="div1">
      <img class="imageItem" :src="item.image" alt="image">
    </div>
    <div class="div2">
      <div class="infoTitre">
        <h3 class="titreRecette"> {{item.recette_nom}} </h3>
        <router-link v-if="item.id" :to="{ name: 'recette', params: { id: item.id } }">Voir</router-link>
      </div>
      <p> {{item.recette_description}} </p>
    </div>
    <div class="div3">
      <p>Temps : {{item.temps}} </p>
      <p>Portions : {{item.portion}} </p>
    </div>
    <div class="div4">
      <p>Catégorie : {{item.categorie_nom}} </p>
      <p>Difficulté : {{item.difficulte_nom}} </p>
    </div>
  </div>
</template>

<style scoped>

  .infoTitre {
    display: flex;
    justify-content: space-between;
  }

  .titreRecette {
    font-weight: bold;
    margin-right: 2em;
  }

  .imageItem {
    width: 200px;
    height: auto;
    border-radius: 10px;
    color: white;
  }

  .item {
    background-color: #2d2d2d;
    border-radius: 10px;
    padding: 1.5em ;
    color: white;
    height: 200px;
    width: 900px;
  }


  .parent {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 3px;
    grid-row-gap: 4px;
  }

  .div1 { grid-area: 1 / 1 / 3 / 3; }
  .div2 { grid-area: 1 / 3 / 2 / 7; }
  .div3 { grid-area: 2 / 3 / 3 / 5; }
  .div4 { grid-area: 2 / 5 / 3 / 7; }

</style>
<script setup>

import { onMounted, computed, ref, reactive } from 'vue';

import FiltreList from "@/components/FiltreList.vue";
import ListItem from "@/components/ListItem.vue";

import axios from 'axios';

const recipes = reactive({
  value: []
});

onMounted(() => {
  getRecipes();
});

function getRecipes() {
  axios.get('http://localhost:3000/recipes')
      .then(response => {

        recipes.value = response.data;
        console.log(recipes.value);
      })
      .catch(error => {
        console.log("error");
      });
}

const getRecettesFitrer = (nom,difficulte,categorie) => {
  console.log(nom);
  console.log(difficulte);
  console.log(categorie);
  if (nom == "" && difficulte == -1 && categorie == -1) {
    getRecipes();
  } else {

    axios.post('http://localhost:3000/recipes/filter', {
        nom: nom,
        difficulte: difficulte,
        categorie: categorie
      })
      .then(response => {

        recipes.value = response.data;
        console.log(recipes.value);
      })
      .catch(error => {
        console.log(error);
      });
  }



}

//todo ici mettre la logique pour les filtres


//todo ici mettre la logique pour les recettes


</script>

<template>
    <main id="catalogue">
      <FiltreList @filtrerRecettes="getRecettesFitrer" />
      <ListItem :recipes="recipes" />
    </main>
</template>

<style scoped>
  #catalogue {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1em;
    width: 88vw;
    height: 100vh;
  }
   /*#catalogue div {
    padding: 1em 2em;
    border-radius: 10px;
    background-color: #599883;
  }

  #catalogue div a {
    color: white; 
  }

  #catalogue div:hover {
    background-color: #00BD7E;
  }*/
</style>
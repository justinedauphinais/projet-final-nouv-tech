<script setup>

import { onMounted, computed, ref, reactive, defineEmits } from 'vue';
import axios from "axios";

const emit = defineEmits(["filtrerRecettes"]);

const nom = ref("");
const difficulte = ref("-1");
const categorie = ref("-1");

const difficultes = reactive({
  value: []
});

const categories = reactive({
  value: []
});

onMounted(() => {
  getFiltres();
});

function getFiltres() {
  axios.get('http://localhost:3000/difficultes')
      .then(response => {

        difficultes.value = response.data;
        console.log(difficultes.value);
      })
      .catch(error => {
        console.log(error);
      });

  axios.get('http://localhost:3000/categories')
      .then(response => {

        categories.value = response.data;
        console.log(categories.value);
      })
      .catch(error => {
        console.log(error);
      });
}

function Filtrer() {
  //console.log(filtre);

  emit("filtrerRecettes", nom.value, difficulte.value, categorie.value);
}

function resetFiltre() {
  nom.value = "";
  difficulte.value = "-1";
  categorie.value = "-1";
  Filtrer();
}

</script>

<template>



  <div id="filtreContainer">
    <h2 class="titreListe">Les Filtres : </h2>

    <!-- Formulaire de filtres -->
    <form @submit.prevent="Filtrer">
      <!-- Filtrer par nom de recette -->
      <label for="recipeName">Nom de recette:</label>
      <input type="text" id="recipeName" v-model="nom" />

      <!-- Filtrer par difficulté -->
      <label for="difficulty">Difficulté:</label>
      <select id="difficulty" v-model="difficulte">
        <option value="-1" >Toutes les difficultés</option>
        <option v-for="difficulty in difficultes.value" :key="difficulty.id" :value="difficulty.id">
          {{difficulty.nom}} </option>

      </select>

      <!-- Filtrer par catégorie -->
      <label for="category">Catégorie:</label>
      <select id="category" v-model="categorie">
        <option value="-1">Toutes les catégories</option>
        <option v-for="category in categories.value" :key="category.id" :value="category.id">
          {{category.nom}} </option>

        <!-- Ajoutez les options de catégorie ici -->
      </select>

      <!-- Bouton de filtration -->
      <button type="submit" id="submit">Filtrer</button>

      <!-- Bouton de réinitialisation -->
      <button id="clear" type="button" @click="resetFiltre">Réinitialiser</button>
    </form>
  </div>

</template>

<style scoped>
   form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
     background-color: #2d2d2d;
     border-radius: 10px;
     padding: 1.5em ;
     color: white;

    }

    label {
      margin: 0.5em;
      font-weight: bold;
    }

    input {
      margin: 0.5em;
      border-radius: 5px;
    }

    select {
      margin: 0.5em;
      border-radius: 5px;
    }

    button {
      margin: 0.5em;
      border-radius: 5px;
    }

   #submit{
     color: white;
     padding: 0.5em 1em;
     background-color: rgba(0, 189, 126, 1);
   }

   #clear {
     padding: 0.5em 1em;
     background-color: #FFCCCC;
   }

   .titreListe {
     text-align: center;
   }

   #filtreContainer{
     margin: 1em;
   }

</style>
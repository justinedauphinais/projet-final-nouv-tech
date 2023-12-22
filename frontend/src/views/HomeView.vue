<script setup>
  import { onMounted, computed, ref, reactive } from 'vue';
  import HomeNew from "@/components/HomeNew.vue";

  import axios from 'axios';

  const recipes = reactive({
    value: []
  });

  const categories = reactive({
    value: []
  });

  onMounted(() => {
    getRecipes();
    getCategories();
  });

  function getRecipes() {
    axios.get('http://localhost:3000/home')
        .then(response => {

          recipes.value = response.data;
        })
        .catch(error => {
          console.log("error");
        });
  }

  function getCategories() {
    axios.get('http://localhost:3000/categories')
        .then(response => {

          categories.value = response.data;
        })
        .catch(error => {
          console.log("error");
        });
  }
</script>

<template>
  <main id="index">
    <div>
      <section>
          <h1>Recettes simples et rapides</h1>
          <p>
            Bienvenue sur le meilleur site pour trouver la recette parfaite! 
            Vous trouverez une grande sélection de recettes variées pour surprendre.
          </p>
        </section>
        <section>
          <h2>Découvrir des nouvelles recettes</h2>
          <HomeNew :recipes="recipes" />
        </section>
    </div>

    <div><router-link to="/catalogue">Voir tout</router-link></div>
  </main>
</template>

<style scoped>
  #index {
    width: calc(100vw - 80px);
    min-height: 100vh;
    padding: 2em;
    position: absolute;
    top: 0;
    left: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #index h1 {
    font-size: 50px;
    color: #00BD7E;
    margin-left: -0.07em;
  }

  #index h2 {
    margin-top: 1em;
    font-size: 30px;
    color: #599883;
  }

  #index div:first-of-type > section:first-of-type p {
    margin-top: -1em;
  }

  #index div:nth-of-type(2) {
    display: flex;
    justify-content: center;
  }

  #index div:nth-of-type(2) a {
    padding: 0.5em 4em;
    border-radius: 25px;
    background-color: #599883;
    color: white;
  }

  #index div:nth-of-type(2) a:hover {
    background-color: #00BD7E;
  }
</style>

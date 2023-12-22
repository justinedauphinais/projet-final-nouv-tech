<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          <img src="../public/home.png" />
        </RouterLink>
        <RouterLink to="/catalogue">
          <img src="../public/catalogue.png" />
        </RouterLink>
      </nav>   
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  * {
  }

  header, nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 75px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    background-color: #2d2d2d;
  }

  nav a {
    color: #00BD7E;
    border-radius: 5px;
    padding-top: 5px;
    padding-bottom: -5px;
  }

  nav img {
    width: 60px;
  }

  nav img:hover {
    padding: 2.5px;
  }

  #header {
    position: absolute;
    top: 2em;
    left: 125px;
  }
</style>

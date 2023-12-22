<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    import axios from 'axios';

    const route = useRoute();

    const recetteId = ref(null);
    const recette = ref('');

    onMounted(() => {
        recetteId.value = route.params.id;

    axios.get(`http://localhost:3000/recipes/${recetteId.value}`)
        .then(response => {
            recette.value = response.data[0];
        })
        .catch(error => {
            console.log(error);
        });

        setTimeout(() => {
            const infosRecetteHeight = document.querySelector('.infos_recette').clientHeight;
            const descriptionRecette = document.querySelector('.description_recette');
            descriptionRecette.style.top = `${infosRecetteHeight + 260}px`;
            descriptionRecette.classList.remove('hidden');
        }, 100);

    });
</script>

<template>
    <main id="recette">
        <!-- bannière de la recette -->
        <div>
            <span></span>
            <img :src="recette.image" alt="recipe_image"> 
            <span></span>
        </div>

        <!-- informations sur la recette -->
        <div class="infos_recette">
            <h2>Informations</h2>

            <p>Portions : {{ recette.portion }}</p>
            <p>Temps de préparation : {{ recette.temps }} minutes</p>
            <p>Niveau de difficulté : {{ recette.difficulte_nom }}</p>

            <!-- ingrédients de la recette -->
            <div class="ingredient_recette">
                <span></span>
                <span>
                    <p>Ingrédients :</p>
                    <ul>
                        <li v-for="ingredient in recette.ingredients" :key="ingredient">{{ ingredient }}</li>
                    </ul>
                </span>
                <span></span>
            </div>

            <!-- allergie potentielle -->
            <div class="allergie_recette">
                <p><strong style="font-weight: bolder;">!! Attention !!</strong> Cette recette peut contenir :</p>
                <ul>
                    <li v-for="allergie in recette.allergies" :key="allergie">{{ allergie }}</li>
                </ul>
            </div>
        </div>
        <div class="description_recette hidden">
            <h2>Description</h2>
            <p>{{ recette.description }}</p>
        </div>

        <div class="categorie_recette">
            <h3>{{ recette.categorie_nom }}</h3>
        </div>
               
        <!-- nom de la recette -->
        <h1>{{ recette.nom }}</h1>
        <div class="instruction_recette">
            <ol>
                <li v-for="instruction in recette.instructions" :key="instruction">{{ instruction }}</li>
            </ol>
        </div>

    </main>
</template>

<style scoped>
    #recette {
        width: calc(100vw - 80px);
        min-height: 110vh;
        position: absolute;
        top: 0;
        left: 80px;
        display: flex;
        flex-direction: column;
    }

    #recette div:first-of-type:not(.ingredient_recette) {
        width: 100%;
        display: flex;
        align-items: center;
    }

    #recette div span:not(.ingredient_recette span) {
        flex-grow: 1;
        height: 50px;
        background-color: #00BD7E;
    }

    #recette img {
        width: 525px;
        height: 375px; 
        border-radius: 10px;
        margin: 0px auto;
        box-shadow: 0px 0px 8px white;
    }

    #recette > .infos_recette {
        width: 360px;
        height: fit-content;
        position: absolute;
        left: 40px;
        top: 250px;
        padding: 10px 20px;
        background-color: rgba(248, 248, 248, 1);
        border-radius: 5px;
        color: black;
    }

    #recette > .description_recette {
        width: 360px;
        height: fit-content;
        position: absolute;
        left: 40px;
        padding: 10px 20px;
        background-color: rgba(248, 248, 248, 1);
        border-radius: 5px;
        color: black;
    }

    #recette > .categorie_recette {
        width: 360px;
        height: fit-content;
        position: absolute;
        right: 40px;
        top: 250px;
        text-align: center;
        font-size: 50px;
        color: rgba(0, 189, 126, 1);
    }

    #recette .ingredient_recette {
        display: flex;
        flex-direction: column;
    }

    #recette .ingredient_recette span:not(.ingredient_recette span:nth-child(2)) {
        height: 20px;
    }

    #recette .ingredient_recette span:nth-child(2) {
        padding: 10px;
        border-radius: 5px;
        background-color: rgba(0, 189, 126, 0.2);
    }

    #recette h2 {
        margin-bottom: 20px;
        font-size: 30px;
        font-weight: 600;
        text-align: center;
        border-bottom: 1px solid black;
    }

    #recette h1 {
        width: 525px;
        font-size: 50px;
        font-weight: 600;
        margin: 0px auto;
        color: #00BD7E;
        text-align: center;
        border-bottom: 1px solid #00BD7E;
    }

    #recette .instruction_recette {
        width: 525px;
        margin: 10px auto;
        color: #00BD7E;
    }

    #recette .instruction_recette li {
        font-size: 20px;
        margin-top: 10px;
    }

    .hidden {
        display: none;
    }
</style>
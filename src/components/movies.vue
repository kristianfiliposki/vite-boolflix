<script>

import { store } from '../store'
export default {
    data() {
        return {
            store,
        };
    },
    methods: {

    },
    mounted() {
    },
}
</script>
<template>
    <h2>Movies</h2>
    <div class="movies">
        <div class="container">
            <div v-for="film in store.films" :key="film.id" class="flip-card">

                <div class="elementi flip-card-inner">
                    <div class="flip-card-front">
                        <img :src="store.src + film.poster_path" class="copertine">
                    </div>
                    <div class="flip-card-back">
                        <div>
                            <div>

                                <div>
                                    <h3>Titolo: {{ film.title }}</h3>
                                    <h3> Titolo originale:{{ film.original_name }}</h3>
                                    <h3>lingua originale</h3>
                                    <div v-if="store.availableLanguage.includes(film.original_language)">
                                        <img class="flags" :src="`/flags/${film.original_language}.png`">
                                    </div>
                                    <div v-else="store.bandieraUk == false">
                                        {{ film.original_language }}
                                    </div>
                                </div>

                                <div>
                                    <h3>voto</h3>
                                    <div class="stelline">
                                        <div v-for=" in  (Math.round((film.vote_average * 5) / 10))">
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
    background-color: transparent;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    background-color: #bbb;
    color: black;
    width: 400px;
    height: 500px;
}

/* Style the back side */
.flip-card-back {
    background: rgb(120, 10, 10);
    color: white;
    transform: rotateY(180deg);
    width: 100%;
    height: 100%;
}

h2 {
    color: red;
}

.movies {
    display: flex;
    justify-content: center;
}

.container {
    display: flex;
    width: 82vw;
    overflow-x: auto;
    justify-content: start;
}

.elementi {
    width: 400px;
    height: 500px;
}

.boxCard {
    position: relative;
}

.InfoCard {
    z-index: 999;
    position: absolute;
    width: 400px;
    height: 500px;
    background-color: rgba(200, 20, 20, 0.7);
}

.InfoCard:hover {
    background-color: black(200, 20, 20, 0.7);
}



h2 {
    font-size: 3em;
}

.stelline {
    display: flex;
    justify-content: center;
}

.stelline div {
    margin: 3px;
}

.copertine {
    width: 100%;
    height: 100%;
}

.flags {
    width: 100px;
    height: 50px;
}
</style>
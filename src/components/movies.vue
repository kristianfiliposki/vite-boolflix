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
    <div class="container">
        <div v-for="film in store.films">
            <div class="elementi">
                <div>
                    <h3>titolo</h3>
                    <div>{{ film.title }}</div>
                </div>
                <div >
                    <img :src="store.src + film.poster_path" class="copertine">
                </div>
                <div>
                    <h3>titolo originale</h3>
                    <div>
                        {{ film.original_title }}
                    </div>
                </div>

                <div>
                    <h3>lingua originale</h3>
                    <div>
                        <div v-if="store.availableLanguage.includes(film.original_language)">
                            <img class="flags" :src="`/flags/${film.original_language}.png`">
                        </div>
                        <div v-else>{{film.original_language}}</div>
                    </div>
                </div>

                <div>
                    <h3>voto</h3>
                    <div>{{ (Math.round(((film.vote_average * 5) / 10 )))}}</div>


                </div>

            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    width: 82vw;
    overflow-x: auto;
    justify-content: start;
}

.elementi {
    flex: 1 1 0px;
    width: 400px;
    height: 1000px;
}

h2{
    font-size: 3em;
}
.copertine{
    width: 100%;
    height: 500px;
}
.flags{
    width: 100px;
    height: 50px;
}
</style>
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
                    <h2>titolo</h2>
                    <div>{{ film.title }}</div>
                </div>
                <div >
                    <img :src="store.src + film.poster_path" class="copertine">
                </div>
                <div>
                    <h2>titolo originale</h2>
                    <div>
                        {{ film.original_title }}
                    </div>
                </div>

                <div>
                    <h2>lingua originale</h2>
                    <div>
                        <div v-if="store.availableLanguage.includes(film.original_language)">
                            <img class="flags" :src="`/flags/${film.original_language}.png`">
                        </div>
                        <div v-else>{{film.original_language}}</div>
                    </div>
                </div>

                <div>
                    <h2>voto</h2>
                    <div>{{ film.vote_average }}</div>
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
    justify-content: center;
}
.copertine{
    width: 100%;
    height: 300px;

}

.elementi {
    background-color: red;
    border: 1px solid black;
    flex: 1 1 0px;
    width: 300px;
    height: 500px;
}
.flags{
    width: 100px;
    height: 50px;
}

.elementi div {
    font: 50%
}
</style>
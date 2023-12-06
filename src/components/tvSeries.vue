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
    <h2>SerieTV</h2>
    <div class="container">
        <div v-for="serie in store.series">
            <div class="elementi">
                <div>
                    <h2>titolo</h2>
                    <div>{{ serie.name }}</div>
                </div>
                <div>
                    <img :src="store.src + serie.poster_path" class="">
                </div>


                <div>
                    <h2>titolo originale</h2>
                    <div>
                        {{ serie.original_name }}
                    </div>
                </div>
                <div>
                    <h2>lingua originale</h2>
                    <div>
                        <div v-if="store.availableLanguage.includes(serie.original_language)">
                            <img class="flags" :src="`/flags/${serie.original_language}.png`">
                        </div>
                        <div v-else="store.bandieraUk == false">
                            {{ serie.original_language }}
                        </div>
                    </div>
                </div>

                <div>
                    <h2>voto</h2>
                    <div>{{ serie.vote_average }}</div>
                </div>

            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    width: 82vw;
    height: 30vh;
    overflow-x: auto;
    justify-content: center;
    flex: 1 1 0px;
}

.elementi {
    background-color: lightblue;
    border: 1px solid black;
    color: black;
    width: 300px;
    height: 500px;
}
.copertine{
    width: 100%;
    height: 300px;

}
.flags{
    width: 100px;
    height: 50px;
}

.elementi div {
    font: 50%
}
</style>
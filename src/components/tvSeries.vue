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
                    <h3>titolo</h3>
                    <div>{{ serie.name }}</div>
                </div>
                <div>
                    <img :src="store.src + serie.poster_path" class="copertine">
                </div>


                <div>
                    <h3>titolo originale</h3>
                    <div>
                        {{ serie.original_name }}
                    </div>
                </div>
                <div>
                    <h3>lingua originale</h3>
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
                    <h3>voto</h3>
                    <div>{{ (Math.round(((serie.vote_average * 5) / 10 )))}}</div>


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
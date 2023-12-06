<script>
import axios from 'axios';
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {

        series() {
            axios.get(
                `https://api.themoviedb.org/3/search/tv?api_key=90a7a15fa0adf959e3dadb07a0339196&query=${this.store.cerca}`
                )
                .then(risultato => {
                    store.series = risultato.data.results;
                    console.log(store.series)

                });
        },

        films() {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=90a7a15fa0adf959e3dadb07a0339196&query=${this.store.cerca}`).then(risultato => {
                store.films = risultato.data.results;
            });
        }
    }
}

</script>
<template>
    <input type="text" v-model="store.cerca" @keyup.enter="series(), films()">
</template>
<style scoped></style>
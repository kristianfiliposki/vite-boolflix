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
        },
    }
}

</script>
<template>
    <div class="container">
        <div><img src="/public/logo/logo-boolflix (1).png" alt=""></div>
        <div class="ricerca">
            <h2>Ricerca</h2>
            <input type="text" v-model="store.cerca" @keyup.enter="series(), films()">
        </div>
    </div>
</template>
<style scoped>
.container {
    height: 10vh;
    width: 100%;
    background-color: rgba(140, 140, 140, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.ricerca {
    font-size: 1.7em;
    color: rgb(255, 252, 252);
    width: 15%;
    height: 100%;
    border-radius: 14px;
    margin-right: 5%;
}

h2 {
    margin: 0 1%;
    font-size: 1em;
}

input {
    border-radius: 14px;
    width: 100%;
    height: 20%;
}
</style>
<script >
import axios from 'axios';
import { store } from './store'
import Search from './components/search.vue';
import Movies from './components/movies.vue';
import tvSeries from './components/tvSeries.vue';

export default {
  data() {
    return {
      store,
    };
  },
  methods: {

    films() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=90a7a15fa0adf959e3dadb07a0339196&query=${this.store.cerca}`).then(risultato => {
        this.store.films = risultato.data.results;
        this.store.films.forEach(film => {
          if (film.original_language == `en`) {
            this.store.bandieraUk = true
          }
          else if (!(film.original_language == "en")) {
            this.store.bandieraUk = false
          }

        });
      });
    },
    series() {
      axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=90a7a15fa0adf959e3dadb07a0339196&query=${this.store.cerca}`
      )
        .then(risultato => {
          this.store.series = risultato.data.results;
          console.log(this.store.series)
        });
    },


  },
  components: {
    Search,
    Movies,
    tvSeries,
  }
}

</script>

<template>
  <Search @cerca="films(), series()" />
  <Movies @cerca="films()" />
  <tvSeries @cerca="series()" />
</template>

<style scoped></style>
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
          store.collections[0].movie[0].language.push(film.original_language)
          store.collections[0].movie[0].language.forEach(language => {
            if (language == "en") {
              store.bandieraUk = true
              store.collections[0].movie[0].flags.push(store.bandieraUk)
              console.log(store.collections[0].movie[0].flags)

            }
            else {
              store.bandieraUk = false
              store.collections[0].movie[0].flags.push(store.bandieraUk)

            }
          });


        });
      });
    },
    series() {
      axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=90a7a15fa0adf959e3dadb07a0339196&query=${this.store.cerca}`
      )
        .then(risultato => {
          this.store.series = risultato.data.results;
          this.store.series.forEach(serie => {
            store.collections[0].serie[0].language.push(serie.original_language)
            store.collections[0].serie[0].language.forEach(language => {
              if (language == "en") {
                store.bandieraUk = true
                store.collections[0].serie[0].flags.push(store.bandieraUk)
              }
              else {
                store.bandieraUk = false
                store.collections[0].serie[0].flags.push(store.bandieraUk)

              }
            });

          });

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
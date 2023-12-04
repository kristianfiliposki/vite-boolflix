<script >
import axios from 'axios';
import { store } from './store'
import Search from './components/search.vue';
import cards from './components/cards.vue';
export default {
  data() {
    return {
      store,
    };
  },
  methods: {

    dati() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=90a7a15fa0adf959e3dadb07a0339196&query=${this.store.cerca}`).then(risultato => {
        this.store.nomi = risultato.data.results;
        this.store.nomi.forEach(nome => {
          console.log(nome.original_language)
          if (nome.original_language == "en") {
            this.store.bandieraUk = true
          }
          else if (!(nome.original_language == "en")) {
            this.store.bandieraUk = false
          }
          console.log(this.store.bandieraUk)

        });
      });
    },
  },
  components: {
    Search,
    cards,
  }
}

</script>

<template>
  <Search @cerca="dati()" />
  <cards @cerca="dati()" />
</template>

<style scoped></style>
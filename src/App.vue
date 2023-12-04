<script >
import axios from 'axios';
import { store } from './store'
import Search from './components/search.vue';
import cards from './components/cards.vue';
export default {
  data() {
    return {
      store,
      nomi: "",
    };
  },
  methods: {
    dati() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=90a7a15fa0adf959e3dadb07a0339196&query=${this.store.cerca}`).then(risultato => {
        this.nomi = risultato.data.results;
        console.log(this.nomi[1]);
      });
    }
  },
  components: {
    Search,
    cards,
  }
}

</script>

<template>
  <Search @filter="dati()" />
</template>

<style scoped>
.elementi {
  display: flex;
  width: 50%;
}

.elementi div {
  margin-left: 30px;

}
</style>
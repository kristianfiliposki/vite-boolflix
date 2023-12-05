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
  methods: {},

  components: {
    Search,
    Movies,
    tvSeries,
  }
}

</script>

<template>
  <Search />
  <Movies />
  <tvSeries />
</template>

<style scoped></style>
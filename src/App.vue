<script >
import { store } from './store'
import Search from './components/search.vue';
import Movies from './components/movies.vue';
import tvSeries from './components/tvSeries.vue';

export default {
  data() {
    return {
      store,
      voto:""
    };
  },
  methods: {

  },

  components: {
    Search,
    Movies,
    tvSeries,
  }
}

</script>

<template>
  <div class="container">
    <div>
      <Search />
      <Movies />
      <tvSeries />
    </div>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  justify-content: center;
}
</style>
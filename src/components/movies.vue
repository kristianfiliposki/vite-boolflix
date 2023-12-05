<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
        };
    },
    methods: {},
    mounted() { },
}
</script>
<template>
    <h2>Movies</h2>
    <div class="container">
        <div v-for="film in store.films">
            <div class="elementi">
                <div>
                    <h2>titolo</h2>
                    <div>{{ film.title }}</div>
                </div>

                <div>
                    <h2>titolo originale</h2>
                    <div>
                        {{ film.original_title }}
                    </div>
                </div>

                <div>
                    <h2>lingua originale</h2>
                    <div>
                        <div v-if="store.bandieraUk == false">
                            {{ film.original_language }}
                        </div>
                        <div v-else="store.bandieraUk == true">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/40px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
                                alt="foto">
                        </div>
                    </div>
                </div>

                <div>
                    <h2>voto</h2>
                    <div>{{ film.vote_average }}</div>
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
    justify-content: center;
}

.elementi {
    width: 200px;
    background-color: red;
    border: 1px solid black;
    flex: 1 1 0px;
}

.elementi div {
    font: 50%
}
</style>
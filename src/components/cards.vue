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
    <div>
        <div v-for="nome in store.nomi">
            <div class="elementi">

                <div>
                    <h2>titolo</h2>
                    <div>{{ nome.title }}</div>
                </div>

                <div>
                    <h2>titolo originale</h2>
                    <div>
                        {{ nome.original_title }}
                    </div>
                </div>

                <div>
                    <h2>lingua originale</h2>
                    <div>
                        <div v-if="(store.bandieraUk == false)">
                            {{ nome.original_language }}
                        </div>
                        <div v-else="((store.bandieraUk) == true)">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/40px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
                                alt="foto">
                        </div>
                    </div>
                </div>

                <div>
                    <h2>voto</h2>
                    <div>{{ nome.vote_average }}</div>
                </div>

            </div>
        </div>
    </div>
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
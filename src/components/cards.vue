<script>
export default {

}
</script>
<template>
    <div>
        <div v-for="nome in nomi">
            <div class="elementi">

                <div>
                    <h2>titolo</h2>
                    <div>{{ nome.title }}</div>
                </div>

                <div>
                    <h2>titolo originale</h2>
                    <div>{{ nome.original_title }}</div>
                </div>

                <div>
                    <h2>lingua originale</h2>
                    <div>{{ nome.original_language }}</div>
                </div>

                <div>
                    <h2>voto</h2>
                    <div>{{ nome.vote_average }}</div>
                </div>

            </div>
        </div>
    </div>
</template>
<style></style>
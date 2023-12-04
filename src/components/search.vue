<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            nomi: "",
        }
    },
    methods: {
        filter() {
            this.$emit("cerca")
        }
    }
}

</script>
<template>
    <input type="text" v-model="store.cerca" @keyup.enter=filter()>
</template>
<style scoped></style>
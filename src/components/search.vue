<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
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
    <input type="text" v-model="store.cerca" @keyup.enter="$emit('cerca')">
</template>
<style scoped></style>
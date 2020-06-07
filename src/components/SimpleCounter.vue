<template>
    <button @click="counter += 1">{{ counter }}</button>
</template>

<script>
    export default {
        name: "SimpleCounter",
        data () {
            return {
                counter: 0
            }
        }
    }
</script>

<style scoped>

</style>
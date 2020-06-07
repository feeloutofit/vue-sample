<template>
    <button @click="incrementCounter">{{ counter }}</button>
</template>

<script>
    export default {
        name: "ButtonCounter1",
        data () {
            return {
                counter: 0
            }
        },
        methods: {
           incrementCounter () {
               this.counter += 1
                this.$emit('increment')
           }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        {{ text }},
        {{ isComplete }}
    </div>
</template>

<script>
    export default {
        name: "Todo2",
        props: ['text', 'isComplete']
    }
</script>

<style scoped>

</style>
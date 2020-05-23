<template>
    <li>
        {{title}}
        <button @click="$emit('remove')">Remove</button>
    </li>
</template>

<script>
    export default {
        name: "TodoItem3",
        props: ['title']
    }
</script>

<style scoped>

</style>
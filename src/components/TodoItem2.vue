<template>
    <li>{{ todo.text }}</li>
</template>

<script>
    export default {
        name: 'todo-item2',
        props: ['todo']
    }
</script>
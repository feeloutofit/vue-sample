<template>
  <div class="2st">
    <h1>2st</h1>
    <div :class="{ active: isActive }"></div>
    <div class="static" :class="{ active: isActive, 'text-danger': hasError }"></div>
    <div :class="classObject1"></div>
    <div :class="classObject2"></div>
    <div :class="[activeClass, errorClass]"></div>
    <div :class="[isActive ? activeClass : '', errorClass]"></div>
    <div :class="[{active: isActive}, errorClass]"></div>
  </div>
</template>

<script>

  export default {
    name: 'second',
    data() {
      return {
        isActive: true,
        hasError: false,
        classObject1: {
          active: true,
          'text-danger': false
        },
        error: null,
        activeClass: 'active',
        errorClass: 'text-danger'
      }
    },
    computed: {
      classObject2() {
        return {
          acitve: this.isActive && !this.error,
          'text-danger': this.error && this.error.type === 'fatal'
        }
      }
    }
  }
</script>

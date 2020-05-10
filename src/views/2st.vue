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
    <my-component1 class="baz boo"></my-component1>
    <my-component2 :class="{ active: isActive }"></my-component2>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    <div :style="styleObject1"></div>
    <div :style="styleObject2"></div>
  </div>
</template>

<script>
  import myComponent1 from '@/components/MyComponent1.vue'
  import myComponent2 from '@/components/MyComponent2.vue'

  export default {
    name: 'second',
    components: {
      myComponent1,
      myComponent2
    },
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
        errorClass: 'text-danger',
        activeColor: 'red',
        fontSize: 30,
        styleObject1: {
          color: 'red',
          fontSize: '13px'
        }
      }
    },
    computed: {
      classObject2() {
        return {
          acitve: this.isActive && !this.error,
          'text-danger': this.error && this.error.type === 'fatal'
        }
      },
      styleObject2() {
        return {
          color: this.activeColor,
          fontSize: this.fontSize + 'px'
        }
      }
    }
  }
</script>

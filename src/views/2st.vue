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
    <div :style="[baseStyles, overridingStyles]"></div>
    <button @click="changeOk1">테스트</button>
    <h1 v-if="ok1">Yes</h1>
    <h1 v-else>No</h1>
    <template v-if="ok1">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <div v-if="Math.random() > 0.5">
      이제 나를 볼 수 있어요.
    </div>
    <div v-else>
      이제는 안보입니다.
    </div>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    <div>
      <template v-if="loginType1 === 'userName'">
        <label>사용자 이름</label>
        <input placeholder="사용자 이름을 입력하세요">
      </template>
      <template v-else>
        <label>이메일</label>
        <input placeholder="이메일 주소를 입력하세요">
      </template>
      <button @click="changeLoginType1">로그인 유형 변경</button>
    </div>
    <div>
      <template v-if="loginType2 === 'userName'">
        <label>사용자 이름</label>
        <input placeholder="사용자 이름을 입력하세요" key="username-input">
      </template>
      <template v-else>
        <label>이메일</label>
        <input placeholder="이메일 주소를 입력하세요" key="email-input">
      </template>
      <button @click="changeLoginType2">로그인 유형 변경</button>
    </div>
    <div>
      <h1 v-show="ok2">안녕하세요!</h1>
      <button @click="changeOk2">v-show 테스트</button>
    </div>
    <div>
      <ul id="example-1">
        <li v-for="item in items1">
          {{ item.message }}
        </li>
      </ul>
    </div>
    <div>
      <ul id="example-2">
        <li v-for="(item, index) in items2">
          {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
      </ul>
    </div>
    <div v-for="item of items1">{{ item.message }}</div>
    <div v-for="(item, index) of items2">{{ parentMessage }} - {{ index }} - {{ item.message }}</div>
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
        },
        baseStyles: {
          color: 'red',
          fontSize: '15px'
        },
        overridingStyles: {
          color: 'blue',
          fontSize: '30px'
        },
        ok1: false,
        typeArr: ['A', 'B', 'C', 'D'],
        loginType1: 'userName',
        loginType2: 'userName',
        ok2: false,
        items1: [
          { message: 'Foo'},
          { message: 'Bar'}
        ],
        parentMessage: 'parent',
        items2: [
          { message: 'Foo'},
          { message: 'Bar'}
        ]
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
      },
      type() {
        return this.typeArr[Math.floor(Math.random() * this.typeArr.length)]
      }
    },
    methods: {
      changeOk1() {
        this.ok1 = !this.ok1
      },
      changeLoginType1() {
        this.loginType1 = this.loginType1 === 'userName' ? 'userEmail' : 'userName'
      },
      changeLoginType2() {
        this.loginType2 = this.loginType2 === 'userName' ? 'userEmail' : 'userName'
      },
      changeOk2() {
        this.ok2 = !this.ok2
      }
    }
  }
</script>

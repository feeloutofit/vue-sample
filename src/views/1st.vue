<template>
  <div class="1st">
    <h1>1st</h1>
    <div>
      {{ message1 }}
    </div>
    <div>
      <span :title="message2">
        내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있습니다!
      </span>
    </div>
    <div @click="isSeen">
      <div>
        클릭
        <p v-if="seen">이제 나를 볼 수 있어요</p>
      </div>
    </div>
    <div @click="addTodos">
      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <div>
      <p>{{ message3 }}</p>
      <button @click="reverseMessage">메시지 뒤집기</button>
    </div>
    <div>
      <p>{{ message4 }}</p>
      <input v-model="message4">
    </div>
    <div>
      <ol>
        <todo-item1></todo-item1>
        <todo-item2 v-for="item in groceryList" :todo="item" :key="item.id"></todo-item2>
      </ol>
    </div>
    <div>
      <p>{{ obj.foo }}</p>
      <button @click="obj.foo = 'baz'">Change it</button>
    </div>
    <div>
      {{ message1.split('').reverse().join('') }}
    </div>
    <div>
      <p>원본 메시지: "{{ message5 }}</p>
      <p>역순으로 표시한 메시지: "{{ reversedMessage1 }}</p>
    </div>
    <div>
      <p>뒤집힌 메시지: "{{ reversedMessage2() }}"</p>
    </div>
    <div>
      <p>now: "{{ now }}"</p>
    </div>
  </div>
</template>

<script>
  import todoItem1 from '@/components/TodoItem1.vue'
  import todoItem2 from '@/components/TodoItem2.vue'

  let obj = {
    foo: 'bar'
  }

  Object.freeze(obj)

  export default {
    name: 'Home',
    components: {
      todoItem1,
      todoItem2
    },
    data() {
      return {
        message1: '안녕하세요 Vue!',
        message2: '이 페이지는 ' + new Date() + '에 로드 되었습니다',
        message3: '안녕하세요 Vue.js!',
        message4: '안녕하세요 Vue!',
        message5: '안녕하세요',
        seen: true,
        todos: [
          {text: 'JavaScript 배우기'},
          {text: 'Vue 배우기'},
          {text: '무언가 멋진 것을 만들기'}
        ],
        groceryList: [
          { id:0, text: 'Vegetables' },
          { id:1, text: 'Cheese' },
          { id:2, text: 'Whatever else humans are supposed to eat' }
        ],
        obj
      }
    },
    computed: {
      reversedMessage1() {
        return this.message5.split('').reverse().join('')
      },
      now() {
        return Date.now()
      }
    },
    methods: {
      isSeen() {
        this.seen = !this.seen
      },
      addTodos() {
        this.todos.push({text: '열심히 공부하기'})
      },
      reverseMessage() {
        this.message3 = this.message3.split('').reverse().join('')
      },
      reversedMessage2() {
        return this.message5.split('').reverse().join('')
      }
    }
  }
</script>
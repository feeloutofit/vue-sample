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
    <div>{{ fullName1 }}</div>
    <div>{{ fullName2 }}</div>
    <div>{{ fullName3 }}</div>
    <div>{{ firstName3 }}</div>
    <div>{{ lastName3 }}</div>
    <div>
      <p>
        yes/no 질문을 물어보세요.
        <input v-model="question">
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>
<script src="https://unpkg.com/axios@0.12.0/dist/axios.min.js"></script>

<script>
  import todoItem1 from '@/components/TodoItem1.vue'
  import todoItem2 from '@/components/TodoItem2.vue'
  import _ from 'lodash'
  import axios from 'axios'

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
        obj,
        firstName1: 'Foo',
        lastName1: 'Bar',
        fullName1: 'Foo Bar',
        firstName2: 'Foo',
        lastName2: 'Bar',
        firstName3: '',
        lastName3: '',
        question: '',
        answer: '질문을 하기 전까지는 대답할 수 없습니다.'
      }
    },
    computed: {
      reversedMessage1() {
        return this.message5.split('').reverse().join('')
      },
      now() {
        return Date.now()
      },
      fullName2() {
        return this.firstName2 + ' ' + this.lastName2
      },
      fullName3: {
        get() {
          return this.firstName3 + ' ' + this.lastName3
        },
        set(newValue)
        {
          let names = newValue.split(' ')
          this.firstName3 = names[0]
          this.lastName3 = names[names.length - 1]
        }
      }
    },
    watch: {
      firstName1(val) {
        this.fullName1 = val + ' ' + this.lastName1
      },
      lastName1(val) {
        this.fullName1 = this.fullName1 + ' ' + val
      },
      question(newQuestion) {
        this.answer = '입력을 기다리는 중...'
        this.getAnswer()
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
      },
      getAnswer: _.debounce(
        function() {
          if (this.question.indexOf('?') === -1) {
            this.answer = '질문에는 일반적으로 물음표가 포함 됩니다. ;-)'
            return
          }
          this.answer = '생각중...'
          const vm = this
          axios.get('https://yesno.wtf/api')
            .then((response) => {
              vm.answer = _.capitalize(response.data.answer)
            })
            .catch((error) => {
              vm.answer = '에러! API 요청에 오류가 있습니다' + error
            })
        },
        500
      )
    }
  }
</script>
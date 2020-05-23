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
    <div v-if="randomMath">
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
    <div>
      <ul id="v-for-object" class="demo">
        <li v-for="value in object">
          {{ value }}
        </li>
      </ul>
    </div>
    <div v-for="(value, name) in object">
      {{ name }}: {{ value }}
    </div>
    <div v-for="(value, name, index) in object">
      {{ index }}. {{ name }}: {{ value }}
    </div>
    <div v-for="item in items1" :key="item.id">
      {{ item.value }}
      <!-- content -->
    </div>
    <div>
      <li v-for="n in even(numbers)">{{ n }}</li>
    </div>
    <div>
      <span v-for="n in 10">{{ n }}</span>
    </div>
    <div>
      <ul>
        <template v-for="item in items1">
          <li>{{ item.message }}</li>
          <li class="divider" role="presentation"></li>
        </template>
      </ul>
      <div v-for="todo in todos1" v-if="!todo.isComplete">
        {{ todo }}
      </div>
      <div>
        <ul v-if="todos2.length">
          <li v-for="todo in todos2">{{ todo }}</li>
        </ul>
        <p v-else>No todos left!</p>
      </div>
      <my-component3 v-for="item in items3" :key="item.id">{{ item.id}} </my-component3>
      <my-component3
        v-for="(item, index) in items4"
        :item="item"
        :index="index"
        :key="item.id"
      >{{ item.id }}</my-component3>
      <div  id="todo-list-example">
        <form @submit.prevent="addNewTodo">
          <label for="new-todo">Add a todo</label>
          <input
            v-model="newTodoText"
            id="new-todo"
            placeholder="E.g. Feed the cat"
          >
          <button>Add</button>
        </form>
        <ul>
          <li
            is="Todo-item3"
            v-for="(todo, index) in todos"
            :key="todo.id"
            :title="todo.title"
            @remove="todos.splice(index, 1)"
          ></li>
        </ul>
      </div>
      <div id="example-3">
        <button @click="counter += 1">Add 1</button>
        <p>위 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
      </div>
      <div id="example-4">
        <button @click="greet">Greet</button>
      </div>
      <div id="example-5">
        <button @click="say('hi')">Say hi</button>
        <button @click="say('what')">Say what</button>
      </div>
      <div>
        <button @click="warn('Form cannot be submmited yet.', $event)">
          Submit
        </button>
      </div>
      <a @click.stop="doThis">test stop</a>
      <form @submit.prevent="onSubmit"><button>test submit prevent</button></form>
      <a @click.stop.prevent="doThat">test stop prevent</a>
      <form @submit.prevent><button>submit prevent</button></form>
      <div @click.capture="doThis"><button>capture</button></div>
      <div @click.self="doThat"><button>self</button></div>
      <a @click.once="doThis">once</a>
      <div @scroll.passive="onScroll" style="height: 50px; overflow: auto;">
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
      </div>
      <div>
        <input @keyup.enter="submit">
      </div>
      <div>
        <input @keyup.page-down="onPageDown">
      </div>
      <div>
        <input @keyup.13="submit">
      </div>
      <div>
        <input @keyup.alt.67="clear">
      </div>
      <div @click.ctrl="doSomething">Do Something</div>
      <div>
        <button @click.ctrl="onClick">A</button>
      </div>
      <div>
        <button @click.ctrl.exact="onCtrlClick">A</button>
      </div>
      <div>
        <button @click.exact="onClick">A</button>
      </div>
      <div>
        <input v-model="message1" placeholder="여기를 수정해보세요">
        <p>메시지: {{ message1 }}</p>
      </div>
      <div>
        <span>여러 줄을 가지는 메시지:</span>
        <p style="white-space: pre-line">{{ message2 }}</p>
        <br>
        <textarea v-model="message2" placeholder="여러줄을 입력해보세요"></textarea>
      </div>
      <div>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
      </div>
      <div id="example-6">
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>체크한 이름: {{ checkedNames }}</span>
      </div>
      <div>
        <select v-model="selected1">
          <option disabled value="">Plaese select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br>
        <span>선택함: {{ selected1 }}</span>
      </div>
      <div>
        <select v-model="selected2" multiple>
          <option disabled value="">Plaese select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br>
        <span>Selected: {{ selected2 }}</span>
      </div>
      <div>
        <select v-model="selected3">
          <option v-for="option in options" :value="option.value">
            {{ option.text }}
          </option>
        </select>
        <span>Selected: {{ selected3 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import myComponent1 from '@/components/MyComponent1.vue'
  import myComponent2 from '@/components/MyComponent2.vue'
  import myComponent3 from '@/components/MyComponent3.vue'
  import TodoItem3 from '@/components/TodoItem3'

  export default {
    name: 'second',
    components: {
      myComponent1,
      myComponent2,
      myComponent3,
      TodoItem3
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
        ],
        object: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        },
        numbers: [1, 2, 3, 4, 5],
        todos1: [
          { do: 'vue.js 공부하기', isComplete: true },
          { do: 'php 공부하기', isComplete: false },
          { do: 'Java 공부하기', isComplete: false }
        ],
        todos2: [
          { do: 'vue.js 공부하기', isComplete: true },
          { do: 'php 공부하기', isComplete: false },
          { do: 'Java 공부하기', isComplete: false }
        ],
        items3: [
          { id: 'itemId1' },
          { id: 'itemId2' },
          { id: 'itemId3' },
          { id: 'itemId4' },
          { id: 'itemId5' },
        ],
        items4: [
          { id: 'itemId6' },
          { id: 'itemId7' },
          { id: 'itemId8' },
          { id: 'itemId9' },
          { id: 'itemId10' },
        ],
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'Do the dishes'
          },
          {
            id: 2,
            title: 'Take out the trash'
          },
          {
            id: 3,
            title: 'Mow the lawn'
          }
        ],
        nextTodoId: 4,
        counter: 0,
        name: 'Vue.js',
        message1: '',
        message2: '',
        checked: false,
        checkedNames: [],
        selected1: '',
        selected2: [],
        selected3: 'A',
        options: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ]
      }
    },
    created() {
      this.items1.push({ message: 'Baz' })
      this.items2 = this.items2.filter((item) => {
        return item.message.match(/Foo/)
      })
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
      },
      randomMath() {
        return Math.random() > 0.5
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
      },
      even(numbers) {
        return numbers.filter((number) => {
          return number % 2 === 0
        })
      },
      addNewTodo() {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      },
      greet(event) {
        alert('Hello' + this.name + '!')
        if (event) {
          alert(event.target.tagName)
        }
      },
      say(message) {
        alert(message)
      },
      warn(message, event) {
        if (event) event.preventDefault()
        alert(message)
      },
      doThis() {
        alert('doThis')
      },
      doThat() {
        alert('doThat')
      },
      onSubmit() {
        alert('onSubmit')
      },
      onScroll() {
        alert('onScroll')
      },
      submit() {
        alert('submit')
      },
      onPageDown() {
        alert('onPageDown')
      },
      clear() {
        alert('clear')
      },
      doSomething() {
        alert('doSomething')
      },
      onClick() {
        alert('onClick')
      },
      onCtrlClick() {
        alert('onCtrlClick')
      }
    }
  }
</script>

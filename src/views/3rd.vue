<template>
    <div>
        <div>
            <div @click="clickTest">클릭테스트</div><!-- 클릭 이벤트 가 넘어옴   -->
            <div @click="clickTest()">클릭테스트</div><!-- 사용 금지 형태  -->
            <div @click="clickTest(test)">클릭테스트</div><!-- 인자를 넣어 주면 인자를 이벤트 대신 인자를 전달 -->
            <div @click="clickTest(test, $event)">클릭테스트</div><!-- 인자 와 네이티브 이벤트를 같이 넘겨준다 -->
            <click-test @click.native="click(test)"></click-test><!-- 컴포넌트 일때 네이티브 이벤트를 받아야 하는경우 사용 일반 태그 에서는 native 수식어를 사용할수 없다. -->
        </div>
        <div>
            <my-component4></my-component4>
        </div>
        <div>
            <simple-counter></simple-counter>
            <simple-counter></simple-counter>
            <simple-counter></simple-counter>
        </div>
        <div>
            <child1 message="안녕하세요!"></child1>
        </div>
        <div>
            <child2 my-message="안녕하세요!"></child2>
        </div>
        <div>
            <input v-model="parentMsg">
            <br>
            <child2 :my-message="parentMsg"></child2>
        </div>
        <div>
            <input v-model="testMsg" @input="inputTest">
            <div>{{ testMsg }}</div>
        </div>
        <div>
            <todo1 :todo="todo"></todo1>
        </div>
        <div>
            <todo2 :text="todo.text" :is-complete="todo.isComplete"></todo2>
        </div>
        <div>
            <comp1 some-prop="1"></comp1>
        </div>
        <div>
            <comp1 :some-prop="1"></comp1>
        </div>
        <div>
            <comp1 :some-prop="1" test-non-props="true"></comp1>
        </div>
        <bs-date-input
            data-3d-date-picker="true"
            class="date-picker-theme-dark"
        ></bs-date-input>
        <div id="counter-event-example">
            <p>{{ total }}</p>
            <button-counter1 @increment="incrementTotal"></button-counter1>
            <button-counter1 @increment="incrementTotal"></button-counter1>
        </div>
    </div>
</template>

<script>
    import clickTest from '@/components/clickTest'
    import myComponent4 from '@/components/MyComponent4'
    import simpleCounter from '@/components/SimpleCounter'
    import child1 from '@/components/Child1'
    import child2 from '@/components/Child2'
    import todo1 from '@/components/Todo1'
    import todo2 from '@/components/Todo2'
    import comp1 from '@/components/Comp1'
    import bsDateInput from '@/components/BsDateInput'
    import buttonCounter1 from '@/components/ButtonCounter1'
    export default {
        name: "third",
        data () {
            return {
                test: 'test',
                parentMsg: '',
                testMsg: '',
                todo: {
                    text: 'Learn Vue',
                    isComplete: false
                },
                total: 0
            }
        },
        components:{clickTest, myComponent4, simpleCounter, child1, child2, todo1, todo2, comp1, bsDateInput, buttonCounter1},
        created() {
            console.log('3rd')
        },
        methods: {
            clickTest (event) {
                console.log('clickTest::', event)
            },
            click () {
                console.log('click::', event)
            },
            inputTest(event) {
                console.log('inputTest::', event.target.value, this.testMsg)
            },
            incrementTotal () {
                this.total += 1
            }
        }
    }
</script>

<style scoped>

</style>
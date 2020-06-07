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
    </div>
</template>

<script>
    import clickTest from '@/components/clickTest'
    import myComponent4 from '@/components/MyComponent4'
    import simpleCounter from '@/components/SimpleCounter'
    import child1 from '@/components/Child1'
    import child2 from '@/components/Child2'
    export default {
        name: "third",
        data () {
            return {
                test: 'test',
                parentMsg: '',
                testMsg: ''
            }
        },
        components:{clickTest, myComponent4, simpleCounter, child1, child2},
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
            }
        }
    }
</script>

<style scoped>

</style>
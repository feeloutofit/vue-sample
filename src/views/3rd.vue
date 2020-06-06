<template>
    <div>
        <div @click="clickTest">클릭테스트</div><!-- 클릭 이벤트 가 넘어옴   -->
        <div @click="clickTest()">클릭테스트</div><!-- 사용 금지 형태  -->
        <div @click="clickTest(test)">클릭테스트</div><!-- 인자를 넣어 주면 인자를 이벤트 대신 인자를 전달 -->
        <div @click="clickTest(test, $event)">클릭테스트</div><!-- 인자 와 네이티브 이벤트를 같이 넘겨준다 -->
        <click-test @click.native="click(test)"></click-test><!-- 컴포넌트 일때 네이티브 이벤트를 받아야 하는경우 사용 일반 태그 에서는 native 수식어를 사용할수 없다. -->
    </div>
</template>

<script>
    import clickTest from "../components/clickTest";
    export default {
        name: "third",
        data () {
            return {
                test: 'test'
            }
        },
        components:{clickTest},
        created() {
            console.log('3rd')
        },
        methods: {
            clickTest (event) {
                console.log('clickTest::', event)
            },
            click () {
                console.log('click::', event)
            }
        }
    }
</script>

<style scoped>

</style>
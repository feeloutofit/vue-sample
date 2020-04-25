<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

    </div>
</template>

<script>
    export default {
        // 이름 적는 것을 잊지마세요
        name: 'ComponentTemplate',
        mixins:[], //mixin
        // compose new components
        extends: {},// 확장
        directives:{},//directive 등록
        filters:{},//filter 등록
        // 컴포넌트 어트리뷰트 그룹
        props: {// 알파벳순으로 정렬합니다
            // String | Number | Boolean | Function | Object | Array | Symbol 를 type 로 사용 가능
            //팩토리 함수
            bar: {
                type:Number,
                default(){ return 1;},
            },
            foo: {
                type:Object,
                default:{a:1}
            },
            fooBar: {
                type:Boolean,
                default:false
            },
            // 여러개의 가능한 타입
            propB: [String, Number],
            // 문자열이며 꼭 필요합니다
            propC: {
                type: String,
                required: true
            },
            // 사용자 정의 유효성 검사 가능
            propF: {
                validator: function (value) {
                    return value > 10
                }
            },
            // 추천 하는 형태
            propG: {
                type: Number,
                default: 0,
                required: true,
                validator: function (value) {
                    return value >= 0
                }
            }
        },
        inject : ['age'], // provide / inject 방식 https://kr.vuejs.org/v2/api/index.html#provide-inject
        // 컴포넌트 변수 그룹
        data() {
            return{
                msg:"",
            }
        },
        computed: {
            sample () { return '' } // 내부 변수가 업데이트 되면 자동으로 반영 됩니다. watch 와 많이 비교 됩니다.
        },
        // 컴포넌트가 다른 컴포넌트를 사용할 경우
        components: {},
        // 컴포넌트 메서드 그룹
        watch: {
            // 새로운 값 과 이전 값을 을 파라미터로 넣어 줍니다. computed 와 많이 비교 합니다. 차이는 computed 는 값이 같으면 캐쉬된 값을 반환 하기에 리소스를 적게 사용한다고 써있습니다.
            value (newVal, oldVal) { console.log('template::watch::value::', newVal, oldVal, this) }
        },
        methods: {},
        // 컴포넌트 라이프사이클 메서드 그룹 순서대로 호출 된다.
        // 인스턴스가 방금 초기화 된 후 데이터 관찰 및 이벤트 / 감시자 설정 전에 동기적으로 호출 됩니다.
        beforeCreate() {},
        /*
        인스턴스가 작성된 후 동기적으로 호출됩니다.
        이 단계에서 인스턴스는 데이터 처리, 계산된 속성, 메서드, 감시/이벤트 콜백 등과 같은 옵션 처리를 완료합니다.
        그러나 마운트가 시작되지 않았으므로 $el 속성을 아직 사용할 수 없습니다.
        */
        created() {},
        // 마운트가 시작되기 바로 전에 호출됩니다. render 함수가 처음으로 호출 됩니다. 이 훅은 서버측 렌더링 중 호출되지 않습니다
        beforeMount() {},
        /*
        el이 새로 생성된 vm.$el로 대체된 인스턴스가 마운트 된 직후 호출됩니다.
        루트 인스턴스가 문서 내의 엘리먼트에 마운트 되어 있으면, mounted가 호출 될 때 vm.$el도 문서 안에 있게 됩니다.
        mounted는 모든 자식 컴포넌트가 마운트 된 상태를 보장하지 않습니다.
        mounted 내부에서 vm.$nextTick를 사용하면 전체가 렌더링된 상태를 보장합니다.이 훅은 서버측 렌더링 중 호출되지 않습니다
        */
        mounted() {
            this.$nextTick(function () {
                // 모든 화면이 렌더링된 후 실행합니다.
            });
        },
        /*
        데이터가 변경되면, 가상 DOM 재 렌더링과 패치가 이뤄지기 전에 호출됩니다.
        이 훅에서 더 많은 상태 변경을 수행할 수 있으며 추가로 재 렌더링을 트리거하지 않습니다.이 훅은 서버측 렌더링 중 호출되지 않습니다
        */
        beforeUpdate() {},
        /*
        데이터가 변경되어 가상 DOM이 재 렌더링되고 패치되면 호출됩니다.
        이 훅이 호출되면 엘리먼트의 DOM이 업데이트 된 상태가 되어 이 훅에서 DOM 종속적인 연산을 할 수 있습니다.
        그러나 대부분의 경우 무한루프가 발생할 수 있으므로 훅에서 상태를 변경하면 안됩니다.
        상태 변화에 반응하기 위해서 계산된 속성 또는 [감시자(#watch)를 사용하는 것이 더 좋습니다.
        updated는 모든 자식 컴포넌트가 재-렌더링 된 상태를 보장하지 않습니다.
        updated 내부에서 vm.$nextTick를 사용하면 전체가 업데이트된 상태를 보장합니다.이 훅은 서버측 렌더링 중 호출되지 않습니다
        */
        updated() {
            this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been re-rendered
            });
        },
        // keep-alive 인 컴포넌트가 활성화 될 때 호출됩니다.이 훅은 서버측 렌더링 중 호출되지 않습니다
        activated() {},
        // keep-alive인 컴포넌트가 비활성화 될 때 호출됩니다.이 훅은 서버측 렌더링 중 호출되지 않습니다
        deactivated() {},
        /*
        Vue 인스턴스가 제거되기 전에 호출됩니다. 이 단계에서 인스턴스는 아직 완벽하게 작동합니다.
        이 훅은 서버측 렌더링 중 호출되지 않습니다. 이벤트나 해제 해야 하는 동작을 여기서 수행합니다.
        */
        beforeDestroy() {},
        /*
        Vue 인스턴스가 제거된 후 호출됩니다.
        이 훅이 호출되면 Vue 인스턴스의 모든 디렉티브가 바인딩 해제 되고 모든 이벤트 리스너가 제거되며
        모든 하위 Vue 인스턴스도 삭제됩니다.이 훅은 서버측 렌더링 중 호출되지 않습니다
        */
        destroyed() {},
        /*
        자손 컴퍼넌트로부터의 에러가 캡처되었을 때에 불립니다.
        오류를 트리거 한 컴포넌트 인스턴스 및 오류가 캡처된 위치에 대한 정보가 들어있는 문자열의 세 가지 전달인자를 받습니다.
        훅은 false를 반환하여 오류가 더 전파되지 않도록 할 수 있습니다.
        이 훅에서 컴포넌트 상태를 수정할 수 있습니다.
        그러나 오류가 캡처되었을 때 다른 내용을 더이상 실행시키지 않는 조건부 템플릿을 사용하거나 렌더링 기능을 사용하는 것이 중요합니다.
        그렇지 않으면 컴포넌트가 무한 렌더링 루프에 던져 질 것입니다.

        에러 전파 규칙
        기본적으로 모든 오류는 정의 된 경우 전역 config.errorHandler로 보내지므로 분석 서비스에 한 곳에 계속 보고할 수 있습니다.
        여러 개의 ‘errorCaptured` 훅이 컴포넌트의 상속 체인이나 부모 체인에 존재하면, 모두 동일한 에러로 호출됩니다.
        errorCaptured 훅에서 에러를 throw 하면, 이 에러와 원래 캡쳐 된 에러 모두가 글로벌 config.errorHandler로 보내집니다.
        errorCaptured 훅은 오류가 더 전파되지 않도록 false를 반환 할 수 있습니다.
        이것은 본질적으로 “이 오류가 처리되었으므로 무시해야합니다.”를 의미합니다.
        추가로 errorCaptured 훅이나 글로벌 config.errorHandler가 이 에러를 위해 호출되지 않도록합니다.
        */
        errorCaptured: (err, vm, info) => {},
        /*
        라우터 컴포넌트 내부 가드

        to: 현재 라우트 객체
        from: 이전 라우트 객체
        next: 훅 해결을 하기 위해 호출 항상 실행 해야 함
        next(): 파이프라인의 다음 훅으로 이동하십시오. 훅이 없는 경우 네비게이션은 승인됩니다.

        next(false): 현재 네비게이션을 중단합니다. 브라우저 URL이 변경되면(사용자 또는 뒤로 버튼을 통해 수동으로 변경됨) from경로의 URL로 재설정됩니다.

        next('/') 또는 next({ path: '/' }): 다른 위치로 리디렉션합니다. 현재 네비게이션이 중단되고 새 네비게이션이 시작됩니다.

        next(error): (2.4.0 이후 추가) next에 전달된 인자가 Error 의 인스턴스이면 탐색이 중단되고 router.onError()를 이용해 등록 된 콜백에 에러가 전달됩니다.

        next(vm => {
            // `vm`을 통한 컴포넌트 인스턴스 접근
        })
        */
        beforeRouteEnter (to, from, next) {
            // 이 컴포넌트를 렌더링하는 라우트 앞에 호출됩니다.
            // 이 가드가 호출 될 때 아직 생성되지 않았기 때문에
            // `this` 컴포넌트 인스턴스에 접근 할 수 없습니다!
            next();
        },
        /*
        Params 또는 쿼리를 변경하면 네비게이션 가드가 실행되지 않습니다.
        실행 감시는 $route 객체를 감시 하거나 컴포넌트 가드의 beforeRouteUpdate를 사용하십시오
        */
        beforeRouteUpdate(to, from, next) {
            next(vm => {
                // `vm`을 통한 컴포넌트 인스턴스 접근
            });
        },
        beforeRouteLeave (to, from, next) {
            // 이 컴포넌트를 렌더링하는 라우트가 이전으로 네비게이션 될 때 호출됩니다.
            // `this` 컴포넌트 인스턴스에 접근 할 수 있습니다.
            console.log('beforeRouteLeave::', this);
            next();
        }
    };
</script>

<!— Add "scoped" attribute to limit CSS to this component only —>
<style scoped lang="scss">
    /* 권장합니다 */
    .MyExample { }
    .MyExample li { }
    .MyExample__item { }
</style>
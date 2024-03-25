// [[Prototype]]

/*
    자바스크립트의 객체는 [[Prototype]] 이라는 숨김 프로퍼티를 갖는다.
    이 프로퍼티의 값은 null 이거나 다른 객체에 대한 참조가 되는데
    참조 대상을 프로토타입(prototype) 이라고 부른다.
    object에서 프로퍼티를 읽으려고 할 때, 해당 프로퍼티가 없으면 자바스크립트는
    자동으로 프로토타입에서 프로퍼티를 찾는다.
    이것을 프로토타입 상속 이라고 한다.
    즉 자바에서 상속과 비슷한 개념이다.
*/

const user = {
    activate : true,
    login : function() {
        console.log('로그인 되었습니다!!');
    }
};

const student = {
    passion : true
};

/*
    [[]] <- 외부에서 접근 못 함
    __proto__ 는 [[Prototype]] 의 getter, setter 역할이다.
    요즘에는 잘 사용하지 않지만, 과거의 호환을 위해 남아있으며
    직관적인 이해를 위해 사용하고 있다.

    함수 Object.getprototypeOf 나 Object.setPrototypeOf 를 써서
    프로토 타입을 설정하는 것이 좋다.
*/
student.__proto__ = user;

console.log(student.activate);
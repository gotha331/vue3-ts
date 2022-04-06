"use strict";
// 类的接口
const obj1 = {
    name: '小明',
    age: 18,
    sex: 'male'
};
console.log(obj1);
const obj2 = {
    name: '小青',
    age: 20,
    sex: 'female'
};
console.log(obj2);
// 用接口限制类的实现（至少包含接口的形状）
class MyClass {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        return 666;
    }
    run() {
        return 888;
    }
}
const classDemo = new MyClass('小青青', 20);
console.log(classDemo.name);
console.log(classDemo.age);
console.log(classDemo.move());
console.log(classDemo.run());
//# sourceMappingURL=04-class5_interface.js.map
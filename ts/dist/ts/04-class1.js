"use strict";
// 类
// 面向对象
class Person {
    name = 'AK';
    age = 18;
    join(b) {
        return this.age + b;
    }
}
// 实例化对象
const ps = new Person();
ps.age = 23;
console.log(ps.name);
console.log(ps.age);
console.log(ps.join(10));
//# sourceMappingURL=04-class1.js.map
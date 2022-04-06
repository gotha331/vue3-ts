"use strict";
// 构造函数
class Person1 {
    name;
    age;
    constructor(name, age) {
        console.log("执行构造函数");
        this.name = name;
        this.age = age;
    }
}
const ps1 = new Person1("小敏", 18);
const ps2 = new Person1("小黄", 20);
console.log(ps1);
console.log(ps1.name);
console.log(ps2);
//# sourceMappingURL=04-class2_constructor.js.map
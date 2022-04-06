"use strict";
// 类型声明
let person = {
    name1: 'gotha',
    age: 30
};
//对象解构
let { name1, age } = person;
console.log(name1);
console.log(age);
// 展开运算
let person2 = {
    class: '03',
    ...person
};
console.log(person2);
// tuple 元组
let tuple;
tuple = ['a', 1, 2];
// 可选元组
let tup1;
tup1 = ['hi', 11, 22];
tup1 = ["hi", 11];
tup1 = ["hi"];
// 操作
tuple.push("myhello");
console.log(tuple); //[ 'a', 1, 2, 'myhello' ]
tuple.pop();
console.log(tuple); // [ 'a', 1, 2 ]
// 更新
tuple[2] = 100;
console.log(tuple); // [ 'a', 1, 100 ]
// 解构
let [a, b, c] = tuple;
console.log(a); // a
console.log(b); // 1
console.log(c); // 100
let [d, ...arg] = tuple;
console.log(d); // a
console.log(arg); // [1,100]
//# sourceMappingURL=01-tuple.js.map
// 类型声明
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var person = {
    name1: 'gotha',
    age: 30
};
//对象解构
var name1 = person.name1, age = person.age;
console.log(name1);
console.log(age);
// 展开运算
var person2 = __assign({ "class": '03' }, person);
console.log(person2);
// tuple 元组
var tuple;
tuple = ['a', 1, 2];
// 可选元组
var tup1;
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
var a = tuple[0], b = tuple[1], c = tuple[2];
console.log(a); // a
console.log(b); // 1
console.log(c); // 100
var d = tuple[0], arg = tuple.slice(1);
console.log(d); // a
console.log(arg); // [1,100]

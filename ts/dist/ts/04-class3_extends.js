"use strict";
// 类的继承 extends
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log(`${this.name} 移动了 ${distance} M`);
    }
}
class Dog extends Animal {
    // constructor(name:string) {
    //   super(name)
    // }
    move(distance) {
        console.log("奔跑中...");
        super.move(distance);
    }
}
class Snake extends Animal {
    move(distance) {
        console.log("爬行中...");
        super.move(distance);
    }
}
const dog = new Dog("旺财");
const snake = new Snake("小青");
dog.move(50);
snake.move(10);
//# sourceMappingURL=04-class3_extends.js.map
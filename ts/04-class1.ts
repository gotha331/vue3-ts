// 类

// 面向对象

class Person {
  name: string = 'AK';
  age: number = 18;

  join(b: number): number {
    return this.age + b
  }
}

// 实例化对象
const ps = new Person();
ps.age = 23;

console.log(ps.name);
console.log(ps.age);
console.log(ps.join(10));



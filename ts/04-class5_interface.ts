// 类的接口

type User = {
  name: string,
  age: number
}

type User1 = User & {
  sex: string
}

const obj1: User1 = {
  name: '小明',
  age: 18,
  sex: 'male'
}

console.log(obj1);

// interface接口

// interface InUser {
//   name: string,
//   age: number
// }

// interface InUser {
//   sex: string
// }

interface Users {
  name: string,
  age: number
}

// 接口继承
interface InUser extends Users {
  sex: string
}

const obj2: InUser = {
  name: '小青',
  age: 20,
  sex: 'female'
}


console.log(obj2);


interface Myinter {
  name: string;
  move(): number
}

// 用接口限制类的实现（至少包含接口的形状）
class MyClass implements Myinter {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  move(): number {
    return 666
  }
  run(): number {
    return 888
  }
}

const classDemo = new MyClass('小青青', 20)
console.log(classDemo.name);
console.log(classDemo.age);
console.log(classDemo.move());
console.log(classDemo.run());


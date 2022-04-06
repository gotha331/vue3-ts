// class 修饰符

// static 
// readOnly
// 抽象类：abstract ，无法被实例化 

class Animal1 {
  public name: string; // public 代表公共的修饰符，当前类、子类、类外都可以访问
  protected age: number; // 受保护的修饰符，可以在当前类和子类中访问，类外部无法访问
  private sex: string; // 私有修饰符，当前类可以访问，子类、类外部无法访问

  constructor(name: string, age: number, sex: string) {
    this.name = name
    this.age = age
    this.sex = sex
  }

  move(distance: number) {
    console.log(`${this.name} 移动了 ${distance} M`);
  }

  // abstract run(distance:string):void
}

class Dog1 extends Animal1 {
  constructor(name: string, age: number, sex: string) {
    super(name, age, sex)
  }
  move(distance: number) {
    console.log("奔跑中...");
    console.log(super.name);
    console.log(super.age);
    console.log(super.sex);
    
    super.move(distance)
  }
}

class Snake1 extends Animal1 {
  move(distance: number) {
    console.log("爬行中...");
    super.move(distance)
  }
}

const dog1 = new Dog1("旺财", 20,'male')
const snake1 = new Snake1("小青", 18,'female')
console.log(snake1.name);
console.log(snake1.age); // protected类。在类外部无法访问
console.log(snake1.sex); // private 私有类，只能在当前类访问


dog1.move(50)
snake1.move(10)
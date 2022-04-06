// 泛型

function fnz<T>(arg: T): T {
  return arg
}

// 1.自动推论
const aaa = fnz(10)
const bbb = fnz("abc")

console.log(aaa);
console.log(bbb);

function fnz1<T, K>(arg: T, abg: K): T {
  return arg
}

// 2.自定义数据类型
fnz<number>(100)
fnz<string>("abc")
fnz1<number, string>(13, 'zzz')

class MyNumber<K> {
  zero: K;
  constructor(z: K) {
    this.zero = z

  }
  add(x: K, y: K): K {
    return x
  }
}

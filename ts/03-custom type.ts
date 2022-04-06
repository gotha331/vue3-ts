// 类型别名 （自定义类型： 联合类型 ｜ 原始值）

type Name = string | number
let ab: Name

ab = 111
ab = "abc"

type Name1 = 11 | 22 | 33 | 44
let bc: Name1

bc = 11
bc = 22
bc = 33
bc = 44
// bc = 55
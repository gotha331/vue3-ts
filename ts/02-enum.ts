// ts枚举类型enum
// enum:各种情况的语义化

enum orderInfo {
  new = 0,
  update = 1,
  delete = 2
}

let order:number
// if(order === orderInfo.new) {
//   console.log("order0");
// }

order = 2

switch (order) {
  case orderInfo.new:
    console.log("order0");
    break;

  case orderInfo.update:
    console.log("order1");
    break;

  case orderInfo.delete:
    console.log("order2");
    break;

  default:
    break;
}





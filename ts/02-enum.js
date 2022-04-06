// ts枚举类型enum
// enum:各种情况的语义化
var orderInfo;
(function (orderInfo) {
    orderInfo[orderInfo["new"] = 0] = "new";
    orderInfo[orderInfo["update"] = 1] = "update";
    orderInfo[orderInfo["delete"] = 2] = "delete";
})(orderInfo || (orderInfo = {}));
var order;
// if(order === orderInfo.new) {
//   console.log("order0");
// }
order = 2;
switch (order) {
    case orderInfo["new"]:
        console.log("order0");
        break;
    case orderInfo.update:
        console.log("order1");
        break;
    case orderInfo["delete"]:
        console.log("order2");
        break;
    default:
        break;
}

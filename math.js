function add(a, b) {
    return a + b;
}
// module.exports = add;

function sub(a, b) {
    return a - b;
}
module.exports = {
     add,
     sub
 };
//another way1
// module.exports = {
//     addFn: add,
//     subFn:sub

// }
//another way2
// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;

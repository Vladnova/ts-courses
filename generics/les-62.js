function logMiddleware(date) {
    console.log(date);
    return date;
}
var t = logMiddleware("5");
var testObj = {
    name: "Vlad",
    age: 30,
    isAdult: true,
};
var v = logMiddleware(testObj);
function getSplitHalf(data) {
    var l = data.length / 2;
    return data.splice(0, l);
}
var arr1 = getSplitHalf([1, 2, 3, 4, 5, 6, 7]);
var arr2 = getSplitHalf([true, false, true, true, false, false]);
console.log(arr1);
console.log(arr2);

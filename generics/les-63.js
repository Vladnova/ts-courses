function myToString(data) {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case "string":
            return data;
        case "bigint":
        case "boolean":
        case "function":
        case "number":
        case "symbol":
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
console.log(myToString(56465464));
console.log(myToString([1, 2, 5, 8, 9, 6, 5]));
console.log(myToString({ f: 5, s: "hello" }));
console.log(myToString("Hello world!"));
console.log(myToString(true));

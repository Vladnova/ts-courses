var data = [
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
    { id: 3, name: "Надя" },
];
function sortArr(data, type) {
    if (type === void 0) { type = "asc"; }
    return data.sort(function (a, b) {
        switch (type) {
            case "asc":
                return a.id - b.id;
            case "desc":
                return b.id - a.id;
            default:
                var _ = type;
                throw new Error("type is not found");
        }
    });
}
console.log(sortArr(data, "desc"));
console.log(sortArr(data));

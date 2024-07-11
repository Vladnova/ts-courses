// Необходимо написать функцию группировки, которая принимает массив объектов
// и его ключ, производит группировку по указанному ключу и возращает
// сгруппированный объект.
// Пример:
/*js
[
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];


При группироке по 'group' ---->

js
{
    '1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
    '2': [ { group: 2, name: 'c' } ]
}
 */
var groups = [
    { group: 1, name: "a" },
    { group: 1, name: "b" },
    { group: 2, name: "c" },
];
function sortGroup(arr, key) {
    return arr.reduce(function (map, item) {
        var itemKey = item[key];
        var currentEl = map[itemKey];
        if (Array.isArray(currentEl)) {
            currentEl.push(item);
        }
        else {
            currentEl = [item];
        }
        map[itemKey] = currentEl;
        return map;
    }, {});
}
console.log(sortGroup(groups, 'group'));

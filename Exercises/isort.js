var arr = [5, 3, 6, 8, 2, 4, 5];
function insert(x, arr) {
    if (arr.length == 0)
        return [x];
    if (x < arr[0])
        return [x].concat(arr);
    return [arr[0]].concat(insert(x, arr.slice(1)));
}
function isort(arr) {
    if (arr.length == 0)
        return [];
    return insert(arr[0], isort(arr.slice(1)));
}
console.log(isort(arr));

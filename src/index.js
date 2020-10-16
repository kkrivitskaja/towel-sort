// You should implement your task here.

module.exports = function towelSort(matrix) {

    console.log("in array:")
    if (!Array.isArray(matrix) || matrix.length == 0) return [];

    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        result = result.concat(i % 2 == 1 && Array.isArray(matrix[i]) ? matrix[i].reverse() : matrix[i])
    }
    return result;
}

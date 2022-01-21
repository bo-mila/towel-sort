
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const arr = matrix ? matrix.map((x, i) => i % 2 === 1 ? x.reverse() : x) : [];

    return [arr].flat(Infinity);
}

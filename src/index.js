module.exports = function towelSort(matrix) {
  let result = []
  if (matrix==undefined) {
    result = [];
    } else {
        for (let i = 0; i < matrix.length; i +=1) {
      if (i%2!==0) {
        result = [...result, ...matrix[i].reverse()];
      } else {
        result = [...result, ...matrix[i]]
      }
    }
  }
  return result
}
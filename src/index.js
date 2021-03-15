module.exports = function check(str, bracketsConfig) {
  let flag = true;
  bracketsConfig.forEach(arr => {
    let i = str.indexOf(arr[0]);
    let j = str.indexOf(arr[1], i + 1);
    let k = 0; console.log(i, j);
    while (flag && k < 100) {
      console.log(i, j);
      if (((j - i) % 2) == 0) { flag = false };
      i = str.indexOf(arr[0], j + 1);
      if (i < 0) { break; };
      j = str.indexOf(arr[1], i + 1);
      if (i > 0 && j < 0) { flag = false };
      k++;
    }
  });
  if (!flag) { return false };
  return true;
}
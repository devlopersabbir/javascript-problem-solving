function convertToTitle(columnNumber) {
  let ans = "";
  while (columnNumber > 0) {
    columnNumber--;
    ans += String.fromCharCode((columnNumber % 26) + "A".charCodeAt(0));
    columnNumber = Math.floor(columnNumber / 26);
  }
  return ans.split("").reverse().join("");
}

console.log(convertToTitle(28));

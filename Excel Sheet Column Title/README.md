# Excel Sheet Column Title

User can give any number as argument in our function. And it should be return
corresponding column title as it appears in an Excel sheet.

For example:

| Letter | ColumnNumber |
| :----: | :----------: |
|   A    |      1       |
|   B    |      2       |
|   C    |      3       |
|   Z    |      26      |
|   AA   |      27      |
|   AB   |      28      |

## Solving process

- Create a state for store Char. called `ans`.
- We have to make loop as like while that will help to run loop based on
  `columnNumber > 0`.
- Each time `columnNumber` should be decrease like `columnNumber--`.
- Inside the loop, get the string charCode using `String.fromCharCode()` method.
  Now in this method make simple calcluation `columnNumber % 26` here 26 is our
  total letter length. Now get the char code using `"A".charCodeAt(0)` I use 0
  to get only o number index.

- Now assign the number which was columnNumber, like

```js
columnNumber = Math.floor(columnNumber / 26);
```

- Now we are ready to return our answer. The result should be shows **BA** but
  we have to reverse this string. To do this let split our asnwer
  `ans.split("")` when it's splited then the output should be like this
  `[B], [A]`. Now use `reverse()` method to make `[A], [B]`. After that just use
  `join()` method to join these text.

> Solving code

```
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
```

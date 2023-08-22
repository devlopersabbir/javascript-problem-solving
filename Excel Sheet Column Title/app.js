console.log("hello");

function convertToTitle(columnNumber) {
  switch (columnNumber) {
    case 1:
      return "A";
    case 2:
      return "B";
    case 3:
      return "C";

    default:
      return "NONE";
  }
}

console.log(convertToTitle(2));

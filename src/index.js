// module.exports = function check(str, bracketsConfig) {
var test = function check(str, bracketsConfig) {
  // your solution
  var output = true;

  // Step 1: check if quantity of brackets is even; if not - the output is "false"
  if (str.length % 2 !== 0) {
    output = false;
    console.log(output);
  // Step 2: check if the first bracket is closing; if yes - the output is "false"
  } else {
    for (let k in bracketsConfig) {
      if (bracketsConfig[k][1] === str[0]) {
        output = false;
        console.log(output);
        break;
      }
    }
  }

  if (output) {

  }
}

test("](()))()", [["(", ")"], ["[", "]"]]);

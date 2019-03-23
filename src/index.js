module.exports = function check(str, bracketsConfig) {
  let output = true;

  // Step 1: check if quantity of brackets is even; if not - the output is "false"
  if (str.length % 2 !== 0) {
    output = false;
    return output;

    // Step 2: check if the first bracket is closing; if yes - the output is "false"
  } else {
    for (let k in bracketsConfig) {
      if (bracketsConfig[k][0] !== bracketsConfig[k][1] && bracketsConfig[k][1] === str[0]) {
        output = false;
        break;
      }
    }
  }

  // Step 3: (if 1 and 2 passed) check array of brackets
  if (output) {
    let storage = [];
    for (let i in str) {
      for (let k in bracketsConfig) {
        if (str[i] === bracketsConfig[k][0]) {
          if (bracketsConfig[k][0] === bracketsConfig[k][1] && str[i] === storage[storage.length - 1]) {
            storage.pop();
            break;
          }
          storage.push(str[i]);
          break;
        }
        if (str[i] === bracketsConfig[k][1] && storage[storage.length - 1] === bracketsConfig[k][0]) {
          storage.pop();
          break;
        }
      }
    }
    output = storage.length === 0;
  }
  return output;
}

// 5 kyu
// Valid Parentheses

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints

// 0 <= input.length <= 100

function validParentheses(str) {
  let x = 0;
  for (let item of str.split("")) {
    if (item === "(") x++;
    else if (item === ")") x--;
    if (x < 0) break;
  }
  return x === 0 ? true : false;
}

validParentheses("((");

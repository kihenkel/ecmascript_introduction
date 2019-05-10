/*
  const, let (instead of var)

  Arguments to use this:
    - using const as a default makes you think about your code more (reassigning variables is rarely necessary really)
    - vars have "function scope", which allow bad code like "var test = 'test'; if(...) { var test = 1234; }"

  Eslint rules:
    - https://eslint.org/docs/rules/no-var
    - https://eslint.org/docs/rules/prefer-const
*/

// *** OLD ***
var array = [1, 2, 3, 4];
array.push(5);
var number = 5;
number = 6;

// *** NEW ***
const array = [1, 2, 3]
array.push(6);
let number = 5;
number = 8;

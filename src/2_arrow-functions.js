/*
  Arrow (lambda) functions

  Arguments to use this:
    - For callbacks arrow functions automatically are bound to their surrounding scope/context. No function binding necessary anymore.
    - You don't need to write the "function" keyword all the time ;)

  Eslint rules:
    - https://eslint.org/docs/rules/prefer-arrow-callback
*/

// *** OLD ***
function doSomething() {
  setTimeout(function () {
    console.log('Hello world!');
  }, 1000);
}
doSomething();

// *** NEW ***
const doSomething = () => {
  setTimeout(() => {
    console.log('Hello world!');
  }, 1000);
}
doSomething();


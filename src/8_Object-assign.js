/*
  Object.assign
    Merges multiple objects

  Arguments to use this:
    - Useful for cloning objects
    - This provides a way to avoid reassigning/changing params

  Eslint rules:
    - https://eslint.org/docs/rules/no-param-reassign (not particularly about Object.assign, but relates to the topic)
*/

// *** OLD ***
const objectA = { a: 1, b: 2 };
const objectB = { b: 3, c: 4 };

objectA.b = objectB.b;
objectA.c = objectB.c;

// *** NEW ***

Object.assign(objectA, objectB);
const objectA = { a: 1, b: 2 };
const objectB = Object.assign({}, objectA);


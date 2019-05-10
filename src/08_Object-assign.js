/*
  Object.assign
    Merges multiple objects
    IMPORTANT: This does not perform a deep merge. For deep merging I suggest using lodash.

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

const objectA = { a: 1, b: 2 };
const objectB = { b: 3, c: 4 };
Object.assign(objectA, objectB);

// Clones the object
const objectC = Object.assign({}, objectA);


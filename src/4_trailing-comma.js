/*
  Trailing comma

  Arguments to use this:
    - Simplifies adding and removing lines
    - Makes the diff easier to read because you're only changing one line instead of two

  Eslint rules:
    - https://eslint.org/docs/rules/comma-dangle
*/

// *** OLD ***

const payload = {
  programId: 11111,
  personId: 22222,
  rankId: 33333
};

// *** NEW ***

const payload = {
  programId: 11111,
  personId: 22222,
  rankId: 33333,
};


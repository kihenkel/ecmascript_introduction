/*
  New shorthands
    1. Object property shorthand
    2. Arrow function shorthand
    3. Arrow function shorthand (returning object)
    4. Omitting arrow function parenthesis if only one argument

  Arguments to use this:
    - Makes defining objects much cleaner
    - Improves readability by avoiding redundant declarations/keywords
    - Saves your time ;)

  Eslint rules:
    - https://eslint.org/docs/rules/object-shorthand
    - https://eslint.org/docs/rules/arrow-body-style
*/

// *** OLD ***

const programId = 12345;
const personId = 54321;
const trimmedPersonName = 'John';

const getPayload = () => {
  return {
    programId: programId,
    personId: personId,
    personName: trimmedPersonName
  };
};

const submit = (payload) => {
  return httpService.post('https://www.google.com', payload);
};

submit(getPayload());

// *** NEW ***

const programId = 12345;
const personId = 54321;
const trimmedPersonName = 'John';

const getPayload = () => ({
    programId,
    personId,
    personName: trimmedPersonName
  });

const submit = payload => httpService.post('https://www.google.com', payload);


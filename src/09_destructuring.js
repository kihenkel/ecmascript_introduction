/*
  Destructuring

  Arguments to use this:
    - Saves lines of code
    - Saves you from having to define generic variables (results, payload, body ...)

  Eslint rules:
    - https://eslint.org/docs/rules/prefer-destructuring
*/

// *** OLD ***

// Example 1
getPerson()
  .then((person) => {
    const firstName = person.firstName;
    const lastName = person.lastName;
    const age = person.age;

    processPerson(firstName, lastName, age);
  });

// Example 2
q.all([
  getPersons,
  getPrograms,
  getRanks,
])
  .then((results) => {
    const persons = results[0];
    const programs = results[1];
    const ranks = results[2];
    process(persons, programs, ranks);
  });

// *** NEW ***

// Example 1
getPerson()
  .then((person) => {
    const { firstName, lastName, age } = person;
    processPerson(firstName, lastName, age);
  });

// Example 2
q.all([
  getPersons,
  getPrograms,
  getRanks,
])
  .then(([persons, programs, ranks]) => {
    process(persons, programs, ranks);
  });
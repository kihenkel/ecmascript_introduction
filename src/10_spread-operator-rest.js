/*
  spread operator / rest parameters
    - "Spreads" properties of an object onto a new object

  Arguments to use this:
    - Can save you lines of code and time
    - Depending on your individual preference, makes code easier to read
    - May perform better than Object.assign

  Eslint rules:
    - https://eslint.org/docs/rules/prefer-object-spread (yes I know, this actually discourages using Object.assign)
*/

// *** OLD ***

const submitPerson = (person) => {
  person.age = 5;
  person.birthday = new Date();
  httpService.post('https://www.google.com', person);
};

// *** NEW ***

const submitPerson = (person) => {
  const personPayload = {
    age: 5, // BEFORE spread: If person contains property age it will overwrite this property
    ...person,
    birthday: new Date(), // AFTER spread: If person contains property birthday it will be overwritten by this property
  };
  httpService.post('https://www.google.com', personPayload);
};


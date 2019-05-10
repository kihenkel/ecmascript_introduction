/*
  Array functions (find, findIndex)

  Arguments to use this:
    - Makes code more readable
    - Saves time
*/

// *** OLD ***
const persons = [{ name: 'John' }, { name: 'Peter' }, { name: 'Bob' }];
let peter;
persons.forEach((person) => {
  if (person.name === 'Peter') {
    peter = person;
  }
});
return peter;

// *** NEW ***

const persons = [{ name: 'John' }, { name: 'Peter' }, { name: 'Bob' }];
return persons.find((person) => person.name === 'Peter');
return persons.findIndex((person) => person.name === 'Peter');


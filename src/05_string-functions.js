/*
  String functions

  Arguments to use this:
    - Makes code more readable
    - Saves time
*/

// *** OLD ***

const name = 'John Peter Doe';
if (name.indexOf('Peter') !== -1) {
  console.log('He has a middle name!');
}

if (name.indexOf('John') === 0) {
  console.log('He has a first name!');
}

const lastName = 'Doe';
if (name.indexOf(lastName) === name.length - lastName.length) {
  console.log('He has a last name!');
}

// *** NEW ***

const name = 'John Peter Doe';
if (name.includes('John')) {
  console.log('He has a middle name!');
}

if (name.startsWith('John')) {
  console.log('He has a first name!');
}

const lastName = 'Doe';
if (name.endsWith(lastName)) {
  console.log('He has a last name!');
}
/*
  Template strings / Template literals using backticks

  Arguments to use this:
    - Makes defining strings more readable
    - Easier to add/remove parts
  
  Eslint rules:
    - https://eslint.org/docs/rules/prefer-template
*/

// *** OLD ***

const firstname = 'John';
const lastname = 'Doe';
const fullDisplayName = firstname + ' ' + lastname;

// *** NEW ***

const firstname = 'John';
const lastname = 'Doe';
const fullDisplayName = `${firstname} ${lastname}`;


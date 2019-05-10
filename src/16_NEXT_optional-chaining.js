/*
  Optional chaining
    - npm i @babel/plugin-proposal-optional-chaining
    - Add to .babelrc: "@babel/plugin-proposal-optional-chaining"
*/

// *** OLD ***

if (response && response.body && response.body.person && response.body.person.firstName) {
  // ...
}

// *** NEW ***

if (response?.body?.person?.firstName) {

}

/*
  Pipeline operator
    - npm i @babel/plugin-proposal-pipeline-operator
    - Add to .babelrc: ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }]
*/

const duplicate = (text) => { return `${text}${text}`; };
const reverse = (text) => { return text.split('').reverse().join(''); }
const removeLetterA = (text) => { return text.replace(/[Aa]/g, ''); }

// *** OLD ***

removeLetterA(reverse(duplicate('Hello this is a test')));

// *** NEW ***

'Hello this is a test' |> duplicate |> reverse |> removeLetterA;
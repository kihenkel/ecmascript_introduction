/*
  async/await

  Arguments to use this:
    - If you hate promise chains, then this might be suitable for you
    - When using async/await instead of Promise chains you stay in the same block scope, enabling you to use variables in between async calls
      (for Promises you awkwardly have to cache variables or somehow pass them through the chain)
    - Avoids indentation
*/

// *** OLD ***

const doSomething = () => {
  let variable;
  getPersons()
    .then((persons) => {
      return get(persons);
    })
    .then((persons) => {
      doSomethingElse(persons);
    })
    .catch(() => {
      // handle error
    });
};

// *** NEW ***

const doSomething = async () => {
  try {
    const persons = await getPerson();
    doSomethingElse(persons);
  } catch (error) {
    
  }
};


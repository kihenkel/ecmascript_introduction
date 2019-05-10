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
  let programName;
  return getProgram()
    .then((program) => {
      programName = program.name;
      return getPersonsByProgramId(program.id);
    })
    .then((persons) => {
      processPersons(persons, programName);
    })
    .catch(() => {
      // handle error
    });
};

// *** NEW ***

const doSomething = async () => {
  try {
    const program = await getProgram();
    const persons = await getPersonsByProgramId(program.id);
    processPersons(persons, program.name);
  } catch (error) {
    // handle error
  }
};


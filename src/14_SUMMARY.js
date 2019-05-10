/*
  SUMMARY - Comparison of a couple of old vs. new features
*/

// *** OLD ***

// ... import q
function getPersonNames() {
  var deferred = q.defer();
  var promises = [];
  promises.push(partitionService.getPartition());
  promises.push(programService.getProgram());

  q.all(promises)
    .then(function (results) {
      var partition = results[0];
      var program = results[1];

      var personIds = program.personIds;
      var maxAge = program.maxAge;

      var personPromises = [];
      personIds.forEach(function (personId) {
        personPromises.push(personService.getPersonByMaxAge(personId, maxAge, partition.id));
      });

      return q.all(personPromises);
    })
    .then(function (persons) {
      var names = [];
      persons.forEach(function (person) {
        names.push(person.firstName + ' ' + person.lastName);
      });
      deferred.resolve(names);
  });
  return deferred.promise;
}
getPersonNames().then(function(personNames) { console.log(personNames) });


// *** NEW ***

const getPersonNames = async () => {
  const [partition, program] = await Promise.all([
    partitionService.getPartition(),
    programService.getProgram(),
  ]);
  const { personIds, maxAge } = program;
  const persons = await Promise.all(personIds.map(
    personId => personService.getPersonByMaxAge(personId, maxAge, partition.id)));
  return persons.map(person => `${person.firstName} ${person.lastName}`);
};
getPersonNames().then(console.log);

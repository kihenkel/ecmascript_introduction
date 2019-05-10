/*
  Promises
    1. Replaces q
    2. Promise.all
    3. Promise.race

  Arguments to use this:
    - Native JS implementation for asynchronous code
    - You don't have to use q.defer() or nasty callbacks anymore
*/

// *** OLD ***
const getPerson = (personId) => {
  var defer = q.defer();
  $.ajax('https://www.google.com', { personId })
    .done((data) => {
      defer.resolve(data);
    })
    .fail((error) => {
        defer.reject(error);
    });
  return defer.promise;
};

getPersons()
  .then(() => {
    // do something
  })
  .catch(() => {
    // handle error
  });
  
// *** NEW ***

const getPerson = (personId) => {
  return new Promise((resolve, reject) => {
    $.ajax('https://www.google.com', { personId })
    .done((data) => {
      resolve(data);
    })
    .fail((error) => {
        reject(error);
    });
  })
};

getPerson().then().catch().finally();
Promise.all([getPerson(), getPerson()]).then().catch();

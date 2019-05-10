/*
  Default function params
*/

const getPrograms = (programIds, limit = 10) =>
  httpService.post('https://www.google.com', { programIds, limit });

/*
  class
*/

class HttpService {
  post = (url, body) = { /* ... */ };
};
const httpService = new HttpService();

/*
  Set
    - Just like an object, but only stores unique values (can't contain the same value twice)
*/

const set = new Set();
set.add(1); // [1]
set.add(5); // [1, 5]
set.add(5); // [1, 5]

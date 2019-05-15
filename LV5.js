var request = require('request');
request.delete('https://lidemy-http-challenge.herokuapp.com/api/books/23', function (error, response, body) {
  console.log(JSON.parse(body));
});
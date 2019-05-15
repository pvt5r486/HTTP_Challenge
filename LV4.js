var request = require('request');
let str = '世界';
let uri = encodeURI(`https://lidemy-http-challenge.herokuapp.com/api/books?q=${str}`);
request.get(uri, function (error, response, body) {
  console.log(JSON.parse(body));
});
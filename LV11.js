var request = require('request');
var options = {
  url: 'https://lidemy-http-challenge.herokuapp.com/api/v3/hello',
  headers: {
    'origin': 'lidemy.com',
  }
};
function callback(error, response, body) {
  console.log(body);
}
request.get(options, callback);

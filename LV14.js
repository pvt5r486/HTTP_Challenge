var request = require('request');
var options = {
  url: 'https://lidemy-http-challenge.herokuapp.com/api/v3/index',
  headers: {
    'origin': 'lidemy.com',
    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  },
};
function callback(error, response, body) {
  console.log(body);
}
request.get(options, callback);

var request = require('request');
let account = 'admin';
let pwd = 'admin123';
let base64Str = Buffer.from(`${account}:${pwd}`).toString('base64');
//console.log(base64Str);

var options = {
  url: 'https://lidemy-http-challenge.herokuapp.com/api/v2/books/89',
  headers: {
    'Authorization': `Basic ${base64Str}`
  }
};
 
function callback(error, response, body) {
  console.log(error);
  console.log(JSON.parse(body));
}
 
request.delete(options, callback);
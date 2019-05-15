var request = require('request');
let account = 'admin';
let pwd = 'admin123';
let base64Str = Buffer.from(`${account}:${pwd}`).toString('base64');
//console.log(base64Str);

let encodeUri = encodeURI(`https://lidemy-http-challenge.herokuapp.com/api/v2/sys_info`);
var options = {
  url: encodeUri,
  headers: {
    'Authorization': `Basic ${base64Str}`,
    'X-Library-Number': 20,
    'User-Agent': 'Mozilla/5.0 (Windows; U; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)',
  }
};
function callback(error, response, body) {
  console.log(JSON.parse(body));
}
request.get(options, callback);

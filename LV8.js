var request = require('request');
let account = 'admin';
let pwd = 'admin123';
let base64Str = Buffer.from(`${account}:${pwd}`).toString('base64');
//console.log(base64Str);

function findBook(queryStr) {
  let encodeUri = encodeURI(`https://lidemy-http-challenge.herokuapp.com/api/v2/books?q=${queryStr}`);
  var options = {
    url: encodeUri,
    headers: {
      'Authorization': `Basic ${base64Str}`
    }
  };
  function callback(error, response, body) {
    console.log(JSON.parse(body));
  }
  request.get(options, callback);
}

function updateISBN(content) {
  var options = {
    url: 'https://lidemy-http-challenge.herokuapp.com/api/v2/books/72',
    contentType: 'application/x-www-form-urlencoded',
    headers: {
      'Authorization': `Basic ${base64Str}`
    },
    form: {
      name: '日日好日：茶道教我的幸福15味【電影書腰版】',
      ISBN: content
    }
  };
  function callback(error, response, body) {
    console.log(error);
    console.log(JSON.parse(body));
  }
  request.patch(options, callback);
}


// 找出符合的書籍
findBook('我');
// 修改資料
updateISBN(9981835423);
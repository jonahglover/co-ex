var rp = require('request-promise');
var co = require('co');

var options = {
  uri: "https://blockchain.info/ticker",
  json: true // Automatically parses the JSON string in the response
};

var test = function* () {
  var res = yield rp(options);
  console.log(res.USD);
  var res = yield rp(options);
  console.log(res.SEK);
};

co(test);
co(test())

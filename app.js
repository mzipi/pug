var pug = require('pug');
var fs = require('fs');

var options = { pretty: true, locals: {} };

pug.renderFile('./home.pug', options, function (err, html) {
    fs.appendFile('./home.html', html, function (err) {});
});
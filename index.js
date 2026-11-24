const express = require('express');
const server = express();
const port = 3000;
server.get('/hello', function (req, res) {
res.send('Hello From Sadaf Panji :) !');
});
server.listen(port, function () {
console.log('Listening on ' + port);
});
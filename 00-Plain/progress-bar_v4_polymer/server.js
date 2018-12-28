/*
  Incredibly simple Node.js and Express application server for serving static assets.
  Given as an example from the React Router documentation (along with examples
  using nginx and Apache):
  - https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
*/

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8081;
const app = express();

// serve static assets normally
app.use(express.static(__dirname + '')); ///CSS-Filters-Polyfill

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'demo/index.html'));
});

app.listen(port);
console.log("server started on port " + port);
console.log(`http://127.0.0.1:${port}`);

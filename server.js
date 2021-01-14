const express = require('express');
const app = express();
const PORT = 3000;

// write your code here
// serve the this.html page when /this is visited
// serve the that.html page when /that is visited
// DO NOT USE express.static



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

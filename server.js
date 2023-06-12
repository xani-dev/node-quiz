const express = require('express');
const path = require('path');
const PORT = 8080;


const app = express();
// parses JSON from incoming request
app.use(express.json());

// Do not edit
const options = {
  lemon:  'yellow',
  lime: 'limegreen',
  tangerine: 'orange',
  grapefruit: 'lightcoral'
};

// #3 helper function 'getColor`
const getColor = (fruit) => {
}

// #1 serve the colors.html page when /colors is visited
// DO NOT USE express.static
app.get('/colors', () => {
  
});

// #2 & #4 handle POST requests to /colors
app.post('/colors', () => {
  
});

// #6 serve styles.css - DO NOT use express.static()
app.get('/styles.css', () => {

});

// #5 Update functionality to database
app.put('/colors/:id/:fruit', () => {

});

// #7 unknown routes - 404 handler
// research what route to serve this for
app.get('', () => {
  
})

// Global error handling middleware
// You can leave this alone
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

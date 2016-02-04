# Week-4-Assessment

## Summary
Week 4 assessment will be used to assess your understanding of the material provided in the past week. At the end of the period, commit your work and submit a pull request.

## How do I get started

1. Install the express dependency with ```npm install```

1. Start your server with ```npm start```

## Challenges

Modify `server.js` to create the following functionality. Read the instructions carefully as status codes and headers may be different for each route.

*IMPORANT*
  - DO NOT MODIFY THE FILES IN THE `/client` FOLDER IN ANY WAY. You only need to modify `/server.js` to complete this assessment.
  - Do not use the `express.static` middleware for this assessment.

1. Create a *GET* route for the url `/this`
  - the route should respond to *GET* requests to `/this` by sending the file `this.html` located in the `client` folder
  - the response must include the header `content-type: text/html; charset=UTF-8`
  - the response status code must be `200`
1. Create a *GET* route for the url `/that`
  - the route should respond to *GET* requests to `/that` by sending the file `that.html` located in the `client` folder
  - the response must include the header `content-type: text/html; charset=UTF-8`
  - the response status code must be `200`
1. Create a *GET* route for the url `/fancy`
  - the route should respond to *GET* requests to `/fancy` by sending the file `fancy.html` located in the `client` folder
  - the response must include the header `content-type: text/html; charset=UTF-8`
  - the response status code must be `200`
1. When the browser loads the HTML for `fancy.html`, it's going to make another request to your server for `styles.css`. Make sure this request works.
  - Your server must send the file `styles.css` located in the `client` folder when a request to `/styles.css` arrives
  - the response must include the header `content-type: text/css; charset=UTF-8`
  - the response status code must be `200`
1. Add a 404 handler to your server such that if a request comes in to *ANY* route not listed above the 404 page is sent
  - Your server must send the file `404.html` located in the `client` folder
  - the response must include the header `content-type: text/html; charset=UTF-8`
  - the response status code must be `404`

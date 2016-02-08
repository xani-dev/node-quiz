# Week-4-Assessment

## Summary
Week 4 assessment will be used to assess your understanding of the material provided
in the past week, in this case `Node.js` and `express`. 

At the end of the period, 
commit your work and submit a pull request.

## How do I get started

1. Run `npm install`

1. Start your server with `npm start`

## How do I submit my work

1. When you are finished with your work, submit a **Pull Request** to your branch, the same exact way you submit hack hours.

## Style Guide
In addition to the functionality, for further assessments we are also going to start assessing the 
readability and best practices of your code by testing it with a style linter. We
follow the [Airbnb](https://github.com/airbnb/javascript) style guide here at Codesmith
and thus will be testing your code against some of the rules in that style guide. This
won't be strictly enforced this time, but moving forward try following as many of the
guidelines listed here as you can:

- [ ] Indentation set to 2 **spaces** (not tabs)
- [ ] Prefer to use single quotes for strings
- [ ] Use semicolons after each expression
- [ ] Do not define any unused variables
- [ ] Remove all console.log statements from your code before submitting
- [ ] Make sure there are no syntax errors in your code
- [ ] Properly indent by 2 spaces for each nested block

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

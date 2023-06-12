# Node-Assessment

## Summary
The assessment will assess your understanding of the material provided
in the Node unit, in this case `Node.js` and `express`.

At the end of the period, commit your work.

## How do I get started

1. Fork and clone this repo - no branches, no PRs

2. Run `npm install`

3. Start your server with `npm start`


## Objectives

Modify the files in the `server.js` file to create the following functionality. Read the instructions carefully as status codes and headers may be different for each route.

*IMPORTANT*
  - DO NOT MODIFY THE FILES IN THE `/client` FOLDER IN ANY WAY. You only need to modify `/server.js` and `/dbConnection.js` to complete this assessment.
  - You must use Express to complete this assessment.
  - **Do not** use the `express.static` middleware to serve static files.
  - use postman to test your routes at your discretion.


1. Create a *GET* route for the url `/colors`
  - the route should respond to *GET* requests to `/colors` by sending the file `colors.html` located in the `client` folder
  - Your response should include a status code of 200.

2. You'll see a dropdown menu on the page you just served. When you select an option from this menu, the frontend will make a POST request to the `/colors` route, sending the selected option as the **request body**. (You can look at how this request is being sent in the `colors.html` file's script tag - lines 28-39.) **Create a server route to handle this POST request** following the next two steps

3. We want to perform some logic on the data that's being sent from the frontend before we send a response back. We'll do this using Express middleware and a helper function.
  - Implement a helper function called `getColor`. 
  - it should take in `fruit` string parameter and returns a `color` string from the options object
  - `getColor` should get the string that was sent on the request body and find its matching property on the `options` object. (Bonus - There is one item on the dropdown menu that is not present in this object. Handle cases in which the data from the request can't be found!)

4. After `getColor` returns, end the app.post's request/response cycle by sending the correct color back to the frontend in a JSON object.
  - Hint: make sure the JSON object you're sending back matches the format that the frontend is expecting!

5. Database connection
  - run your local instance of mysql server and have a mysql database running (with the cars table from last week's exercises)
  - install `mysql2` node package
  - connect your server to your mysql database (either pool or connection is acceptable) - `dbConnection.js` file
  - create a PUT route handler that takes in an `id` and a `fruit` from `req.params` and updates the color of the car based on its car_id.
  - it should use the helper function `getColor` to get the color based on the fruit from the `options` object - just like the previous `app.post` function
  - example url: `colors/1/tangerine`

6. Bonus - Now, add some styling! When the browser loads the HTML for `colors.html`, it's going to make another request to your server for `styles.css`. Make sure this request works.
  - Your server must send the file `styles.css` located in the `client` folder when a request to `/styles.css` arrives
  - DO NOT use Express.static.
  - Include the correct status code.

7. BONUS - Add a 404 handler to your server such that if a request comes in to *ANY* route not listed above the 404 page is sent
  - Your server must send the file `404.html` located in the `client` folder
  - This time, the response status code must be `404`

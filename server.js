const cors = require('cors');
const express = require('express');
const poolTest = require('./dbConnection');

const path = require('path');

const PORT = 8080;
const app = express();
const corsOptions = {
	origin: ['http://localhost:3000'],
	optionsSuccessStatus: 200,
};

// parses JSON from incoming request
// Middleware...
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Do not edit
const options = {
	lemon: 'yellow',
	lime: 'limegreen',
	tangerine: 'orange',
	grapefruit: 'lightcoral',
};

// #3 helper function 'getColor`
const getColor = (fruit) => {
  const fruitColor =req.params['fruit']
	res.send({fruit:options}); 
  return getColor(fruit);
};

// #1 serve the colors.html page when /colors is visited
// DO NOT USE express.static
app.get('/colors', cors(corsOptions), async (req, res) => {
	let colorsHTMLpath = path.join(__dirname, './client/colors.html');
	res.status(200).sendFile(colorsHTMLpath);
});

// #2 & #4 handle POST requests to /colors
app.post('/colors', cors(corsOptions), async (req, res) => {
	const { selectedColor } = req.body;

	const [instertColor] = await poolTest.query(
		`INSERT INTO car (color) VALUES (?)`,
		[selectedColor]
	);
   instertColor ? res.send({color: selectedColor}) : res.status(404).send({ message: 'Color Not Found.' });
	
});

// #6 serve styles.css - DO NOT use express.static()
app.get('/styles.css', cors(corsOptions), async (req, res)=> {
	let stylesCSSpath = path.join(__dirname, './client/styles.css');
	res.sendFile(stylesCSSpath);
});

// #5 Update functionality to database
app.put('/colors/:id/:fruit', cors(corsOptions), async(req, res) => {
  	let id = req.params['id'];
		let fruit = getColor(fruit);

		const [updateCar] = await poolTest.query(
			`UPDATE cars SET fruit=? WHERE car_id=? `,
			[fruit, id]
		);
		const message = updateCar.info;

		message
			? res.send({ message })
			: res.status(404).send({ message: 'Could not update Car' });
});

// #7 unknown routes - 404 handler
// research what route to serve this for
app.get('', () => {});

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

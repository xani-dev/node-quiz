const mysql = require('mysql2');

// create pool or connection

exports.poolTest = mysql
	.createPool({
		host: '127.0.0.1',
		port: '3306',
		user: 'root',
		password: 'b0n4f0nt!',
		database: 'nodejs_schema', // <== name of schema
	})
	.promise();
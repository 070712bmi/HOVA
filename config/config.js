var path = require("path"),
	rootPath = path.normalize(__dirname + '/..');

module.exports = {
	development: {
		db: "mongodb://localhost/shortservice_db_dev",
		url: 'https://localhost:8010',
		root: rootPath,
		app: {
			name: 'Hova ShortService Dev'
		},
		port: 8010
	}
};

var usersConnected = [];
var log = require('../config/logger.js');

module.exports = function(socket) {
	

	function init() {
	}
	init();

	socket.on('new_message', function(data, callback) {
	});

	socket.on('logout', function(user_id) {
	});

	socket.on('login', function(user) {
	});

	socket.on('register-on-disconnect', function(user) {
	});

	socket.on('disconnect', function() {
	});

	socket.on('reconnect', function() {
	});
};

// Register new user example
function registerUser(user, socket_id) {
	
}

// Remove user example
function removeUser(user_id, socket_id) {

}

// Disconnect user example
function disconnectUser(socket_id) {
	
}

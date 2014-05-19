
var $ = require('jquery');

function ApiService(){
	this.token = null;	
}

ApiService.prototype.login = function(username, password, callback) {
	
	var request = $.ajax({
		url: "/api/token",
		username: username,
		password: password,
		complete: function(jqXHR, textStatus){
			
			this.token = jqXHR.responseJSON.token;
			
			if(callback !== undefined){
				callback(jqXHR.status === 200);
			}
		}
	});

};

ApiService.prototype.isAuthenticated = function() {
	return this.token !== null;
};


ApiService.prototype.register = function(username, password, callback) {
	
	var data = {
		username: username,
		password: password
	};

	var request = $.ajax({
		url: "/api/users",
		data: JSON.stringify(data),
		contentType: 'application/json',
		method: "POST",
		complete: function(jqXHR, textStatus){
			
			if(callback !== undefined){
				callback(jqXHR.status === 201);
			}
		}
	});
};

module.exports = ApiService;

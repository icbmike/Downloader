function ApiService(){
	this.token = null;	
}

ApiService.prototype.Login = function(username, password) {
	return null;
};

ApiService.prototype.isAuthenticated = function(first_argument) {
	return this.token === null;
};

module.exports = ApiService;



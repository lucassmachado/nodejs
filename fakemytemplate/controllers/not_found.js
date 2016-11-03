function NotFoundController(request, response) {
	response.statusCode = 404;
	response.write('Resource not found.');
	response.end();
}

module.exports = NotFoundController;
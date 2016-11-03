const faker = require('faker');
const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer();
server.on('request', function(request, response) {
	const parsedUrl = url.parse(request.url);
	const parameters = querystring.parse(parsedUrl.query);
	
	console.log('parameters: ', parameters);
	
	const result = faker.fake(parameters.template);
	
	response.write(result);
	response.end();
});

server.listen(3000);
console.log('Server is running.');

/*
* Primary file for the API
*
*
*/

//Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// The server should respond to all requests with a string
var server = http.createServer((req, res) => {
    // Get the URL and parse it
    const parsedUrl = url.parse(req.url, true);

    // Get the path
    const path = parsedUrl.pathname;
    const trimmedUrl = path.replace(/^\/+|\/+$/g, '');

    //Get teh query string as an object
    const queryStringObject = parsedUrl.query;

    // Get the HTTP method
    const method = req.method.toLowerCase();

    // Get the headers as an object
    const headers = req.headers;

    // Get the payload, if any
    const decoder = new StringDecoder('utf-8');
    let buffer = '';
    req.on('data', (data) => {
        buffer += decoder.write(data);
    });
    req.on('end', () => {
        buffer += decoder.end();

        //Send the response
        res.end('Hello World!\n');

        // Log the request path
        console.log('Request received with the payload ', buffer);
    });
});

// Start the server and have it listen to port 3000
server.listen(3000, () => {
    console.log('Server is listning on port 3000 now');
});

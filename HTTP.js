const http = require("http");

const server = http.createServer((req, res) => {
	//console.log(req);
	if (req.url === "/") {
		res.end("Welcome to our homepage");
	}
	if (req.url === "/about") {
		res.end("Priyanjali");
	}
	//res.write();
	//res.end();
	res.end(`<h1>Oops!</h1>
    <p>We cant find the page
    <a href = "/">back home </a>`);
});
server.listen(5000);

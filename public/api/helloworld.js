export default function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).send(`
	<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Connection Test</title>
	</head>
	<body>
	  <h1>hello world</h1>
	</body>
	</html>
   `);
}

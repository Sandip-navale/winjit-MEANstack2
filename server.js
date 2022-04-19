const http = require('http');
const app = require('./app');

//tell express on which port you are working use set function to set configuration
const port = process.env.PORT || 3000;
app.set('port',port);

//we want to use this app as a listener for incoming requests hence type following
//pass it to create server
const server= http.createServer(app);
server.listen(process.env.PORT | 3000);

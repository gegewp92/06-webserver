/**
 * Ver documentacion de node
 * https://nodejs.org/dist/latest-v16.x/docs/api/http.html#httpcreateserveroptions-requestlistener
 * 
 * http.createServer([options][, requestListener])
 */


const http = require('http');

//req = todo lo que esta solicitando por parte del cliente. res = lo que voy a responder cuando se procese ese req
http.createServer( (req, res)  => {
    
    //console.log(req);
    res.write("Hola Mundo!");
    res.end();

})
.listen(8080);
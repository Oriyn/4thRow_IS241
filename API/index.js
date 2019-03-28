const express = require('express');
const mysql = require('mysql')

const app = express()

app.use(function(req,res,next) { // Middleware
    res.header("Access-Control-Allow-Origin", "*"); //NOT PRODUCTION
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (incomingRequest, outgoingResponse) => {
    const responseData = {
        version: "0.0.1",
        apiName: "RestaurantAPI"
    }

    outgoingResponse.send(responseData)
})

app.listen(8080)
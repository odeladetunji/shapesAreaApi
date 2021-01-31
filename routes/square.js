const express = require('express');
const app = express.Router();
const modelData = require('../database/model/data')

app.post("/", function(request, response){
    const areaOfSquare = 
    request.body.dimension.length * request.body.dimension.length;

    const shapeData = await modelData.shapes.create({
        emailAddress: request.body.email,
        area: areaOfSquare,
        payload: JSON.stringify(request.body)
    });

    return response.send(shapeData);
});

module.exports = app;
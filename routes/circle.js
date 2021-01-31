const express = require('express');
const app = express.Router();
const modelData = require('../database/model/data')

app.post("/", function(request, response){
    const areaOfCircle = 
    request.body.dimension.radius * request.body.dimension.radius;

    const shapeData = await modelData.shapes.create({
        emailAddress: request.body.email,
        area: areaOfCircle,
        payload: JSON.stringify(request.body)
    });

    return response.send(shapeData);

});

module.exports = app;
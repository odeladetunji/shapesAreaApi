const express = require('express');
const app = express.Router();
const modelData = require('../database/model/data')

app.post("/", function(request, response){
    const areaOfRectangle = 
    request.body.dimension.length * request.body.dimension.breath;

    const shapeData = await modelData.shapes.create({
        emailAddress: request.body.email,
        area: areaOfRectangle,
        payload: JSON.stringify(request.body)
    });

    return response.send(shapeData);
});

module.exports = app;
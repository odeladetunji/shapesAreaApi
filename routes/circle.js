const express = require('express');
const app = express.Router();
const modelData = require('../database/model/data')
const validation = require('../validation/validateToken');

app.post("/", validation.validateToken, (request, response) => {
    
    if(request.body.shape != "Circle")
       return response.status(400).json({
            errors: "shape field must be 'Circle', you are calling a circle Api"
       });

    const areaOfCircle = 
      Math.PI * request.body.dimension.radius * request.body.dimension.radius;

    modelData.shapes.create({
        email: request.body.email,
        area: areaOfCircle.toFixed(2),
        shapetype: request.body.shape,
        payload: JSON.stringify(request.body.dimension)
    }).then(resp => {
        return response.send(resp);
    }, (errMsg) => {
        return response.status(422).json({
            errors: errMsg.errors
        })
    });
});

module.exports = app;
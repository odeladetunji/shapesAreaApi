const express = require('express');
const app = express.Router();
const modelData = require('../database/model/data')
const validation = require('../validation/validateToken');

app.post("/", validation.validateToken, (request, response) => {

    if(request.body.shape != "Square")
       return response.status(400).json({
            errors: "shape field must be 'Square', you are calling a square Api"
       });

    const areaOfSquare = 
    request.body.dimension.length * request.body.dimension.length;

    modelData.shapes.create({
        email: request.body.email,
        shapetype: request.body.shape,
        area: areaOfSquare,
        payload: JSON.stringify(request.body.dimension)
    }).then(resp => {
        console.log(resp)
        return response.send(resp);
    }, (errMsg) => {
        console.log(errMsg)
        return response.status(422).json({
            errors: errMsg.errors
        })
    });
});

module.exports = app;
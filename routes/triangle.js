const express = require('express');
const app = express.Router();
const modelData = require('../database/model/data')
const validation = require('../validation/validateToken');

app.post("/", validation.validateToken, (request, response) => {

    if(request.body.shape != "Triangle")
    return response.status(400).json({
         errors: "shape field must be 'Triangle', you are calling a triangle Api"
    });

    let totalSides = request.body.dimension.side_a + request.body.dimension.side_b + request.body.dimension.side_c;
    let s = totalSides / 2;
    let sideOne = s - request.body.dimension.side_a;
    let sideTwo = s - request.body.dimension.side_b;
    let sideThree = s - request.body.dimension.side_c;

    let multiplicationOfSides = s * sideOne * sideTwo * sideThree;

    const areaOfTriangle = Math.sqrt(multiplicationOfSides);

    console.log(areaOfTriangle)

    modelData.shapes.create({
        email: request.body.email,
        shapetype: request.body.shape,
        area: areaOfTriangle,
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
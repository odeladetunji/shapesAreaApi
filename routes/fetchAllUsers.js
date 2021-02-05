const express = require('express');
const app = express.Router();
const modelData = require('../database/model/data')
const validation = require('../validation/emailAndPassword');
const tokenValidation = require('../validation/validateToken');

app.get("/", tokenValidation.validateToken, (request, response) => {
    validation.emailValidation(request, response);
    validation.passwordValidation(request, response);
    modelData.users.findAll({limit: 20, offSet: 0}).then(result => {
        return response.send(result);
    })
});

module.exports = app;
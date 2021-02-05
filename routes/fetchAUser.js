const express = require('express');
const app = express.Router();
const modelData = require('../database/model/data')
const validation = require('../validation/emailAndPassword');
const validation = require('../validation/validateToken');

app.get("/", validation.validateToken, (request, response) => {

    validation.emailValidation(request, response);
    validation.passwordValidation(request, response);

    modelData.users.findAll({
        where: {
              email: request.query.email
        }
    }).then(result => {
        return response.send(result);
    })
});

module.exports = app;
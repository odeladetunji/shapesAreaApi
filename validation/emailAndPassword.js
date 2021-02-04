const express = require('express');
const app = express.Router();

function passwordValidation(request, response){
    switch(request.query.password){
        case undefined: return response.status(422).json({
            error: "Password is required for fetching data"
        });
        case "": return response.status(422).json({
            error: "Password cannot be empty"
        });     
    }
}

function emailValidation(request, response) {
    switch(request.query.email){
        case undefined: return response.status(422).json({
            error: "Email is required for fetching data"
        });
        case "": return response.status(422).json({
            error: "Email address cannot be empty"
        });     
    }
}

module.exports = { passwordValidation, emailValidation }

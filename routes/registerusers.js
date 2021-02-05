const express = require('express');
const app = express.Router();
const modelData = require('../database/model/data');
const validation = require('../validation/validateToken');

app.post("/", validation.validateToken, validation.validateToken, (request, response) => {
   
    function createNewUser(){
        modelData.users.create({
            "email": request.body.email,
            "password": request.body.password
          }).then(resp => {
              let responsePayload = {}; 
              responsePayload['message'] = 'User Successfully Created';
              responsePayload['body'] = resp;
              return response.send(responsePayload);
          }, (errMsg) => {
              console.log(errMsg)
              return response.status(422).json({
                  errors: errMsg.errors
              })
          });
    }

    modelData.users.findAll({
        where: {
          email: request.body.email
        }
    }).then(user => {
        if(user.length == 0){
            createNewUser();
        }else{
            response.status(400).json({ errors: "User with this email already exists"})
        }
    });

});

module.exports = app;
const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

module.exports = function(){
    router.get('/',
        mainController.mainPage
    );    

    router.get('/quienes-somos',
        mainController.quienesSomos
    );  

    router.get('/servicios',
        mainController.servicios
    );  

    return router;
}
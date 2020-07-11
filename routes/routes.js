const express = require("express");
const router = express.Router();

const rateLimit = require("express-rate-limit");
const testController = require('../controllers/testController');


//limite de peticiones por usuarios
const limit = rateLimit({
    max: 100, //peticiones maximas
    windowMs: 60 * 60 * 1000, // 1 hora de prohibicion
    message: "Excediste el limite de peticiones regresa mas tarde",
});



router.get("/test", limit, testController.test);




module.exports = router;
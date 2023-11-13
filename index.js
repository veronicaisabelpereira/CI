"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = 3000;
console.log("Mi nombre es ", process.env.NAME);
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        console.log(this.name);
    };
    return User;
}());
//endpoint para saber en que ambiente estamos
app.get("/env", function (req, res) {
    res.json({
        environment: process.env.ENVIRONMENT,
    });
});
app.get("/hola", function (req, res) {
    res.json({
        message: "Hola mundo, desde el servidor",
    });
});
app.listen(PORT, function () {
    console.log("Server is running on port: ", PORT);
});

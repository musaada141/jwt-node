const express = require("express");

const verifyToken = (req, res, next) => {
    const bearerToken = req.headers["authorization"]; // bearer 97ghhligjhbukyu5dyjhjgv
    console.log(bearerToken)
    if (bearerToken !== undefined) {
        let token = bearerToken.split(" ")[1];
        req.token = token;
    } else {
        res.json({ msg: "Token not generated / null" });
    }
    next();
};

module.exports = verifyToken;

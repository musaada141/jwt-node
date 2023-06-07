const express = require("express");
const app = express()
const jsonFile = require("../dwsample2.json");
// const config = require("../../../../Downloads/dwsample2-json.json");
// console.log(jsonFile);

const fs = require("fs");

const jsonObj = {
  objData: async (req, res) => {
    const data = fs.readFile("dwsample2.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      return res.send(data);
    });
    console.log("mesaage");
  },
};

c



module.exports = jsonObj;

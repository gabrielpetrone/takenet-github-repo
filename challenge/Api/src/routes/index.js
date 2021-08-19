const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next){
      res.status(200).send({
         title: "API Take GitHub Repo",
         version: "0.0.1",
         Obs: "Hello, world!"
      });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var Messages=require('../public/models/messages.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getMessages',Messages.getAllMessages);

router.post("/saveMessage",Messages.saveMessage);

router.get("/getMessage",Messages.getMessageById);

router.get("/deleteMessage",Messages.deleteMessageById);

module.exports = router;

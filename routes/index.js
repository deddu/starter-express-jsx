'use strict';
var express = require('express');
var router = express.Router();


// TODO: extend this to auto look in the folder and automatically add all jsons in there.
var defaultform = {
  "title": "Pirate Check in",
  "name":"hello_pirates",
  "fields": [
    {
      "name": "id",
      "type": "text",
      "label": "Pirate Identifier",
      "required": true
    },
    {
      "name":"spacer1",
      "type": "hr"
    },
    {
      "type": "paragraph",
      "text": "Please provide information about your pirate's behavior and mood:"
    },
    {
      "name": "arr",
      "type": "radio",
      "label": "ARRR",
      "required":false
    }
  ]
};

router.get('/', function(req, res) {
  res.render('index', defaultform);
});


router.post('/',function(req,res){

  res.status(200).render('success',req.body);

});

module.exports = router;

'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');


// TODO: extend this to auto look in the folder and automatically add all jsons in there.
var defaultform = {
  "title": "Pirate Check in",
  "name":"hello_pirates",
  "recipients": [
    {
      "name":"guybrush",
      "email":"guybrush.threepwood@mi.com"
    }
  ],
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


router.post('/', posthandler);


function posthandler(req, res, next){
  var content = JSON.stringify(req.body);
  let form = content.form || 'default';

  var mailOptions = {
    from: '"tester adams" <foo@blurdybloop.com>', // sender address
    to: 'andrea@turinggroup.com', // list of receivers
    subject: 'Hello ✔ '+ req.body.id, // Subject line
    text: 'Hello world 🐴' + content, // plaintext body
    html: '<b>Hello world 🐴 <code><pre>'+content+'</pre></code></b>' // html body
  };

  console.log(req.body);

  res.status(200).render('success',req.body);

  // transporter
  //   .sendMail(mailOptions)
  //   .then(function(info){
  //     console.log(info);
  //     res.status(200).send(info);
  //   })
  //   .catch(function(err){
  //     console.log(err);
  //     res.status(500).send(err);
  //   });


}

module.exports = router;

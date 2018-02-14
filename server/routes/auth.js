const express = require('express');

const passport = require('passport');
const saltRounds = 12;
const router = express.Router();


const db = require('../models');


router.post('/login',
  passport.authenticate('local'), (req, res) => {
  console.log(req.user, 'req.user')
  return res.json({
    id: req.user.id,
    username: req.user.username,
    success: true
  });
});



module.exports = router;




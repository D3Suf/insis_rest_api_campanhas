/**
 * Load Module dependencies
 * [EndPoint wiki]
 */
const express = require('express')
    , router = express.Router();

/**
 * 
 * @Return documentation about API
 * @Method [GET]
 */
router.get('/', function(req, res){
    res.status(200).send('OK ... Returning documentation SOON!');
});


module.exports = router;
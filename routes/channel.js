/**
 * [EndPoint channel]
 * Load Module dependencies & controllers
 */
const express = require('express')
    , router = express.Router()
    , channelController = require('../controllers/ChannelController');

/**
 * 
 * @Create new channel 
 * @Method [POST]
 */
router.post('/', channelController.createChannel);

/**
 * 
 * @Return channel by id
 * @Method [GET]
 */

router.get('/', function (req, res) {
    res.status(200).send('Returning documentation SOON!');
});

module.exports = router;
/**
 * [EndPoint campanha]
 * Load Module dependencies & controllers
 */
const express = require('express')
    , router = express.Router()
    , campanhaController = require('../controllers/CampanhaController');

/**
 * 
 * @Create new Campanha 
 * @Method [POST]
 */
router.post('/', campanhaController.createCampanha);

/**
 * 
 * @Return Campanha by id
 * @Method [GET]
 */
router.get('/:id', campanhaController.getCampanha);

/**
 * 
 * @Update Campanha Status by id
 * @Method [PUT]
 */
router.put('/:id', campanhaController.editStatus);

/**
 * 
 * @Update Campanha Content &/ Channel by id
 * @Method [PUT]
 */
router.put('/:id/contentBody', campanhaController.editContentBody);

/**
 * 
 * @Return Campanha Content &/ Channel by id
 * @Method [GET]
 */
router.get('/:id/content/channel/:id_channel', campanhaController.getContentByChannel);

module.exports = router;
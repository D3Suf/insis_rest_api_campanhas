/**
 * [Model Channel]
 * Attributes [name]
 */

/**
 * Load Module dependencies
 */
const mongose = require('mongoose')
    , Schema = mongose.Schema;

/**
 * Campanha Model
 */
const Channel = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    }
});

/**
 * Export Campanha Model
 */
module.exports = mongose.model('Channel', Channel);